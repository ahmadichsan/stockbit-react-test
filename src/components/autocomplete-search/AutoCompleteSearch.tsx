//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { Input, InputGroup, InputGroupAddon, InputGroupText, Spinner } from 'reactstrap';
import { getDataSearch, qsParse, qsStringify } from '../../helpers';
import { QuerySearch } from '../../interfaces';

//  Region Import Constants

//  Region Import Interfaces
import { AutoCompleteSearchProps, AutoCompleteSearchState } from './AutoCompleteSearch.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook

//  Region Import Components/Cards

//  Region Import Assets

//  Region Import Style
import './AutoCompleteSearch.scss';

class AutoCompleteSearch extends Component<AutoCompleteSearchProps, AutoCompleteSearchState> {
  listener: HTMLElement | null = null;

  state: AutoCompleteSearchState = {
    isLoading: false,
    page: 0,
    query: (qsParse(this.props.location.search) as QuerySearch).query || '',
    suggestions: [],
    totalPage: 1,
    isInputFocused: false,
  };

  componentDidMount = async () => {
    try {
      const elm = document.getElementById("autocomplete");

      if (!elm) return;

      this.listener = elm;

      this.listener.addEventListener('scroll', this.scrollListener, true);
    } catch (error) {
      console.log(error.message);
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate = (prevProps: AutoCompleteSearchProps) => {
    if (prevProps.location.search !== this.props.location.search) {
      this.setState({
        query: (qsParse(this.props.location.search) as QuerySearch).query || '',
      });
    }
  }

  componentWillUnmount = () => {
    if (this.listener) this.listener.removeEventListener('scroll', this.scrollListener, true);
  }

  scrollListener = (event: Event) => {
    const { page, totalPage, isLoading } = this.state;

    const element = event.target as HTMLElement;

    if (!element) return;

    if (element.scrollHeight - element.scrollTop - element.clientHeight < 1) {
      if (page <= totalPage && !isLoading) {
        this.getData();
        return;
      }
    }
  };

  getData = async () => {
    try {
      const { query, page, totalPage } = this.state;

      const _page = page + 1;

      if (query.length === 0 || _page > totalPage) return;

      this.setState({ isLoading: true });

      const data = await getDataSearch(query, _page);

      if (_page === 1) {
        this.setState({
          isLoading: false,
          totalPage: data.total_pages,
          suggestions: data.results,
          page: _page,
        });
        return;
      }

      this.setState(prevState => ({
        isLoading: false,
        totalPage: data.total_pages,
        suggestions: [...prevState.suggestions, ...data.results],
        page: _page,
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ isLoading: false });
    }
  }

  handleClickItem = (query: string) => {
    let route = `/${qsStringify({ query })}`;

    this.setState({ query }, () => {
      if (query.length === 0) route = '/';

      this.props.history.push(route);
    });
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    this.setState(prevState => ({
      query: value,
      suggestions: value.length === 0 ? [] : prevState.suggestions,
      page: 0,
    }), this.getData);
  };

  onFocus = () => {
    this.setState({ isInputFocused: true }, this.getData);
  };

  onBlur = () => {
    setTimeout(() => {
      this.setState({ isInputFocused: false });
    }, 500);
  };

  render() {
    const {
      query, suggestions,
      isInputFocused, isLoading,
    } = this.state;

    return (
      <div className="w-100 auto-complete">
        <div>
          <InputGroup>
            <Input
              type="text"
              placeholder="Type your favorite movie here..."
              className="border-0 rounded-start"
              value={query}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />

            <InputGroupAddon
              addonType="append"
              onClick={() => this.handleClickItem(query)}
            >
              <InputGroupText>
                <i className="fa fa-search" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div
          id="autocomplete"
          className={classnames(
            "autocomplete-content",
            {
              "d-block": isInputFocused && query.length > 0,
              "d-none": !(isInputFocused && query.length > 0),
            }
          )}
        >
          {suggestions.length === 0 && !isLoading && (
            <div
              className="text-center w-100"
            >
              No Results
            </div>
          )}


          <div>
            {suggestions.map(item => {
              return (
                <div
                  key={item.id}
                  className="item"
                  onClick={() => this.handleClickItem(item.title)}
                >
                  {item.title}
                </div>
              );
            })}

            {isLoading && (
              <div className="d-flex justify-content-center align-items-center w-100 mt-2 mb-2">
                <Spinner color="dark" size="sm" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AutoCompleteSearch);
