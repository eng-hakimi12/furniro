
function Products(props) {
    return <div>
        
<div className="h-[900px]">
<h1 class="ml-[870px] text-4xl font-bold">{props.big-name}</h1>

            <div class="h-[620px] w-[530px] bg-[#F4F5F7] ml-[50px]">

        <div className="h-[400px] w-[full]  {bg-[url(https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600)]}  bg-no-repeat  ">
        <h1 class="rounded-full bg-red-400 w-10 ml-[179px]">{props.Name-1}</h1>
        </div>
        <h1 class="font-bold text-3xl mt-4 ml-5">{props.Name}</h1>
        <p class="text-[#898989] text-2xl ml-5">{props.title}</p>
        <div class="flex">
        <h1 class="font-bold text-2xl mt-4 ml-5">{props.price-2}</h1>
        <p class=" text-[#B0B0B0] ml-5 mt-4">{props.price-3}</p></div>

    </div>

</div>


    </div>
}

export default Products