//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

//  Region Import Constants

//  Region Import Interfaces
import { SearchProps, QuerySearch } from './Search.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function
import { qsParse, qsStringify } from '../../helpers';

//  Region Import Custom Hook

//  Region Import Components/Cards

//  Region Import Assets

//  Region Import Style
import './Search.scss';

function Search(props: SearchProps) {
  const [query, setQuery] = useState<string>((qsParse(props.location.search) as QuerySearch).query || '');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setQuery(value);
  };

  const handleClick = () => {
    if (query.length === 0) {
      props.history.push('/');

      return;
    }

    const route = `/${qsStringify({ query })}`;
    props.history.push(route);
  };

  return (
    <div className="w-100 search">
      <div>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search movie here..."
            className="border-0 rounded-start"
            value={query}
            onChange={onChange}
          />

          <InputGroupAddon
            addonType="append"
            onClick={handleClick}
          >
            <InputGroupText>
              <i className="fa fa-search" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

export default withRouter(Search);
