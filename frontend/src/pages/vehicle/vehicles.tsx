import { useEffect, useState } from "react";
import DetailModal from "../../components/modal/DetailVahicle";

// pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchVehicles, setPage, setSearch } from "@/features/vehicle/vehicleSlice";

export default function Vehicles() {
  const [modal, setModal] = useState(false);
  const { vehicles, totalPages, page, search } = useAppSelector(
    (state) => state.vehicle
  );
  const [id, setId] = useState(0);
  const dispatch = useAppDispatch();

  const opeModal = (id: number) => {
    setModal(true);
    setId(id);
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const handleSearch = (search:string)=>{
    dispatch(setSearch(search))
  }

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch, page, search]);

  console.log(vehicles, totalPages);

  return (
    <div className="w-full">
      {/* Top */}
      <div className="h-[400px] flex justify-center items-center">
        <div className="w-[700px]">
          <h1 className="text-center font-bold text-xl text-[#FFD43B] md:text-2xl">
            VTraker
          </h1>
          <p className="text-center text-3xl md:text-4xl font-medium">
            Optimasi Armada dengan Vehicle Tracker
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-center">
            Mempermudah perusahaan dalam memantau kendaraan operasional secara
            real-time, meningkatkan efisiensi, dan mengurangi biaya.
          </p>
          <div className="w-full  flex justify-center mt-3">
            <input
              type="search"
              placeholder="Search..."
              className="focus:outline-none focus:border-[#FFD43B] focus:ring-2 focus:ring-[#FFD43B]/50  border w-[80%] p-2 rounded-2xl text-center"
              onChange={(e)=>handleSearch(e.target.value)}            
            />
          </div>
        </div>
      </div>
      <div className="p-8">
        <table className="w-full table-auto rounded-2xl border-separate border-spacing-0 overflow-hidden">
          <thead className=" border-b bg-[#FFD43B] text-white text-lg">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Nama</th>
              <th className="p-4" >
                <span className="hidden md:block">Nomor plat</span>
                <span className="block md:hidden">Plat</span>
              </th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {vehicles ? (
              vehicles.map((item, index) => (
                <tr
                  className="p-3 odd:bg-white even:bg-gray-100 cursor-pointer"
                  key={index + 1}
                  onClick={() => opeModal(item.id as number)}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.model}</td>
                  <td className="p-3">{item.plat_number}</td>
                  {
                    item.status === "active" ? <td className="p-3 text-green-500">{item.status}</td>:
                    item.status === "maintenance" ? <td className="p-3 text-yellow-500">{item.status}</td>:
                    item.status === "inactive" && <td className="p-3 text-red-500">{item.status}</td>
                  }
                  
                </tr>
              ))
            ) : (
              <p>No Data</p>
            )}
          </tbody>
          <tbody>
            <tr>
              <td colSpan={5} className="p-4 bg-amber-100">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (page > 1) handlePageChange(page - 1);
                        }}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink
                          href="#"
                          isActive={page === 1 + 1}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(i + 1);
                          }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (page < totalPages) handlePageChange(page + 1);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {modal && <DetailModal modal setModal={setModal} vehicleId={id} />}
    </div>
  );
}
