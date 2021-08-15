//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Spinner } from 'reactstrap';
import { getDataSearch, qsParse, qsStringify } from '../../helpers';
import { MovieObject, QuerySearch } from '../../interfaces';

//  Region Import Constants

//  Region Import Interfaces
import { AutoCompleteSearchProps } from './AutoCompleteSearch.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook

//  Region Import Components/Cards

//  Region Import Assets

//  Region Import Style
import './AutoCompleteSearch.scss';

/**
 * TODO ICHSAN
 * 
 * ini masih nge bugs. pas pencarian, dia ga nyari based on ketikan terakhir
 * karena di bikin kalo lagi loading jangan ngambil data
 */

function AutoCompleteSearch(props: AutoCompleteSearchProps) {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<MovieObject[]>([]);
  const [page, setPage] = useState(1);
  const [inputFocus, setInputFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  const getData = useCallback(async (_query: string, _page: number, _totalPage: number) => {
    try {
      if (_query.length === 0 || _page > _totalPage) return;

      setIsLoading(true);

      const data = await getDataSearch(_query, _page);
      
      setTotalPage(data.total_pages);

      setIsLoading(false);

      if (_page === 1) {
        setSuggestions(data.results);
        return;
      }
      
      setSuggestions(prevSuggestions => [...prevSuggestions, ...data.results]);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const elm = document.getElementById("autocomplete");

    if (!elm) return;

    const scrollListener = (event: Event) => {
      const element = event.target as HTMLElement;
  
      if (!element) return;
  
      if (element.scrollHeight - element.scrollTop - element.clientHeight < 1) {
        // console.log({totalPage, page});
        if (page <= totalPage) {
          console.log('masuk');
          setPage(prevPage => prevPage + 1);
          return;
        }

        // setPage(prevPage => prevPage + 1);
      }
    };

    elm.addEventListener('scroll', scrollListener);

    () => {
      elm.removeEventListener('scroll', scrollListener);
    };
  }, []);

  useEffect(() => {
    const parsed = qsParse(props.location.search) as QuerySearch;

    if (query !== parsed.query) setQuery(parsed.query || '');
  }, [props.location.search]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length === 0) setSuggestions([]);
    setQuery(value);
    if (page !== 1) setPage(1);
  };

  const onFocus = () => {
    setInputFocus(true);
  };

  const onBlur = () => {
    setTimeout(() => {
      setInputFocus(false);
    }, 500);
  };

  useEffect(() => {
    if (inputFocus && !isLoading && page <= totalPage && query.length > 0) {
      console.log({
        inputFocus,
        page,
        totalPage,
        query,
      });

      getData(query, page, totalPage);
    }
  }, [getData, inputFocus, page, totalPage, query]);

  const handleClick = (query: string) => {
    const route = `${props.location.pathname}${qsStringify({ query })}`;
    props.history.replace(route);
  };

  return (
    <div className="w-100 auto-complete">
      <div>
        <Input
          type="text"
          placeholder="Search movie here..."
          className="border-0 rounded-3"
          value={query}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <div
        id="autocomplete"
        style={{
          position: "absolute",
          minHeight: 40,
          maxHeight: 200,
          overflowX: "auto",
          backgroundColor: 'white',
          width: '100%',
          marginTop: 5,
          borderRadius: 5,
          border: '1px solid black',
          display: inputFocus && query.length > 0 ? 'block' : 'none',
        }}
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
                onClick={() => handleClick(item.title)}
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

export default withRouter(AutoCompleteSearch);
