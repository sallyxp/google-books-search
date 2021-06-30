
import React from "react";
import "./style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-group">
                
                <input 
                    className="form-control"
                    id="Title"
                    type="text"
                    value={q}
                    placeholder="Enter Book title here   "
                    name="q"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="pull-right">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger float-right">
                    Search
                </button>
            </div>
        </form>
    );
}
export default Form;