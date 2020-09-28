import React, {useState, useEffect} from 'react';

const Pagination = ({showPerPage, onPaginationChange, total, paginate}) =>{
    const [counter, setCounter] = useState(1);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total/showPerPage); i++) {
        pageNumbers.push(i);
      }    

    useEffect(()=> {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    },[counter]); 

    const onButtonClick = (type) =>{
        if (type === "prev"){
            if(counter === 1){
                setCounter(1);
            }else{
                setCounter(counter -1);
            }
        }else if(type === "next"){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter);
            }else{
                setCounter(counter +1);
            }
        }
    }
    return(
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
    <a class="page-link" href="javascript:void(0)" onClick={()=> onButtonClick("prev")}>Previous</a>
    </li>
    {/* this will work when data come from api  */}
    {pageNumbers.map((el,index) => (
        <li class={`page-item ${index+1 === counter ? "active" : null}`} key={index}>
            <a class="page-link" href="javascript:void(0)" 
            onClick={() => setCounter(index + 1)}>{index + 1}</a></li>
    ))}
    <li class="page-item">
    <a class="page-link" href="javascript:void(0)" 
    onClick={()=> onButtonClick("next")}>Next</a>
    </li>
  </ul>
</nav>
        </div>
    );
}

export default Pagination;