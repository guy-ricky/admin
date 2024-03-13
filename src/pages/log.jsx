<div className='mt-6 w-full h-screen'>
<div className='pl-2'>   
<Link className='bg-blue-600 p-2 rounded-lg w-40 text-white hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-4' to="/category">Add Category</Link>
</div>
<DataGrid
  rows={data1}
  columns={columns}
  pageSize={5}
  checkboxSelection
/>
</div>