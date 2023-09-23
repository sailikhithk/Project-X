import SelectComponent from "../Select/Select"

const FilterComponent = (props) => {
    return(
        <div className="filter-container">
        <img src={props.icon} className="img-fluid icon" alt="Filter Icon" />
        <SelectComponent color={props.color} handleSelectChange={props.handleSelectChange} selectedValue={props.selectedValue} options={props.options}/>
      </div>
    )
}

export default FilterComponent