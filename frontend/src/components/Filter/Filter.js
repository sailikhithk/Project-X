import SelectComponent from "../Select/Select"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const FilterComponent = (props) => {
    return(
        <div className="filter-container">
        <FilterAltOutlinedIcon style={{color: props.color}}/>
        <SelectComponent color={props.color} handleSelectChange={props.handleSelectChange} selectedValue={props.selectedValue} options={props.options}/>
      </div>
    )
}

export default FilterComponent