import React from "react";
import { Button } from 'reactstrap';

export default class SearchBar extends React.Component {
  render() {
    return (
    <div className="row">
      <div className="col-10">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">@</span>
        <select class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" >
          <option value="1">تهران</option>
          <option value="2">شیراز</option>
          <option value="3">اصفهان</option>
        </select>
      </div>
      </div>
      <Button outline color="primary">کلیک کن</Button>
    </div>)
  }
}