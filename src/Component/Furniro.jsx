function Furniro() {
    return <div>
    <div class="flex justify-between bg-green-200 pl-[30px] pr-[30px] h-[80px] pt-8">
        <div className="flex">
        <img className="mb-4" src="./src/Images/Meubel House_Logos-05.png" alt="" />
        <h1 class="font-bold text-1xl ml-2">Furniro</h1>
        </div>

        <div class="">
        <ul class="flex gap-10 ">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>

    
    <div class="flex w-[20px] h-[20px] mr-[180px] gap-10">
        <img src="./src/Images/mdi_account-alert-outline.png" alt="" />
        <img src="./src/Images/akar-icons_search (1).png" alt="" />
        <img src="./src/Images/akar-icons_heart.png" alt="" />
        <img src="./src/akar-icons_heart.png" alt="" />
        <img src="./src/ant-design_shopping-cart-outlined.png" alt="" />
    </div>

</div>


<div>
    <img class="relative w-full h-[600px]" src="./src/scandinavian-interior-mockup-wall-decal-background 1.png" alt="" />
    <div class="absolute w-[450px] h-[320px]  mt-[-350px] ml-[780px] bg-[#FFF3E3] pl-[30px] pt-[30px] ">
        
        <h1>New Arrival</h1>

        <h1 class="text-[#B88E2F] font-bold text-4xl pt-[10px]">Discover Our New Collection</h1>
            <p class="pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button class="bg-[#B88E2F] text-white w-[100px] h-[30px] mt-[10px]">BUY Now</button>
    </div>
</div>

<div>
    <h1 class="font-bold text-4xl ml-[750px] mt-[40px]">Browse The Range</h1>
    <p class="ml-[650px] text-2xl  mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>


<div class="h-[500px] mt-12 ml-[50px] flex gap-20">


    
    <div>
        {/* <img class="h-[400px]" src="Mask Group.png" alt="">1 */}
        
        <img  class="h-[400px] " src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <h1 class="ml-[130px] text-4xl mt-4 font-bold">Dining</h1>
    </div>


    <div>
        <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <h1 class="ml-[130px] text-4xl mt-4 font-bold">Living</h1>
    </div>


    <div>
        <img className="" src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <h1 class="ml-[130px] text-4xl mt-4 font-bold">Bedroom</h1>
    </div>



</div>

<div className="h-[900px]">



    
<h1 class="ml-[870px] text-4xl font-bold">Our Products</h1>

            <div class="h-[620px] w-[530px] mt-10  bg-[#F4F5F7] ">

        <div className="h-[400px] w-[full]  bg-[url(https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600)]  bg-no-repeat  ">
        <h1 class="rounded-full bg-red-400 text-5xl w-[130px] ml-[279px]">-30%</h1>
        </div>
        <h1 class="font-bold text-3xl mt-4 ml-5">Syltherine</h1>
        <p class="text-[#898989] text-2xl ml-5">Stylish cafe chair</p>
        <div class="flex">
        <h1 class="font-bold text-2xl mt-4 ml-5">Rp 2.500.000</h1>
        <p class=" text-[#B0B0B0] ml-5 mt-4">Rp 3.500.000</p></div>

    </div>

</div>




<div>
    
</div>
</div>
}

export default Furniro