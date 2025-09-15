import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect, useState } from "react";
import { fetchDetailVehicle } from "@/features/vehicle/vehicleSlice";
import formateDate from "@/utils/formateDate";
import { fetchReport } from "@/features/report/reportSlice";

export default function DetailModal({
  modal,
  setModal,
  vehicleId,
}: {
  modal: boolean;
  setModal: (open: boolean) => void;
  vehicleId: number;
}) {
  if (!modal) return null;
  const { vehicle } = useAppSelector((state) => state.vehicle);
  const dispatch = useAppDispatch();
  const [date, setDate] = useState('')

  const handleChange = (e:string)=>{
    setDate(e)
    if(e) dispatch(fetchDetailVehicle(vehicleId, e))
  }

  const handleReport = ()=>{
    dispatch(fetchReport({vehicleId, date}))
  }

  useEffect(() => {
    dispatch(fetchDetailVehicle(vehicleId));
  }, [dispatch, vehicleId]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={() => setModal(false)}
    >
      <div
        className=" flex bg-white h-[500px] md:w-[500px] w-[400px] rounded-lg shadow-lg p-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full ">
          {/* VEHICLE STATUS DETAIL */}
          <div className="text-center">
            <h1 className="text-xl font-bold">{vehicle?.model}</h1>
            <p className="text-gray-500">
              {vehicle?.plat_number} /
              {vehicle?.status === "active" ? (
                <span className="text-green-500"> {vehicle.status}</span>
              ) : vehicle?.status === "maintenance" ? (
                <span className="text-yellow-500"> {vehicle.status}</span>
              ) : vehicle?.status === "inactive" ? (
                <span className="text-red-500"> {vehicle.status}</span>
              ) : (
                <p>No Status Vehicle</p>
              )}
            </p>
          </div>

          {/* INPUT DATE */}
              <div className="flex justify-center" >
                <input 
                type="date" 
                className="p-2 border rounded-2xl"
                name="date"
                value={date}
                onChange={(e)=>handleChange(e.target.value)}
                />
              </div>

          {/* DETAIL TRIPS */}
          <div className="mt-5 h-[250px] overflow-y-auto">
            {vehicle?.Trips?.length !== 0 ? (
              <table className=" table-auto w-full border-separate rounded border-spacing-0 overflow-hidden ">
                <thead className="bg-[#FFD43B] text-white border-b">
                  <tr className="p-2 ">
                    <th className="p-2">No</th>
                    <th className="p-2">Dari</th>
                    <th className="p-2">Hingga</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle?.Trips?.map((item, index) => (
                    <tr key={index + 1} className="odd:bg-white even:bg-gray-200">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{formateDate(item?.start_time)}</td>
                      <td className="p-2">{formateDate(item?.end_time)}</td>
                      <td className="p-2">{item?.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Belum ada data perjalanan hari ini / {formateDate(new Date().toString())}</p>
            )}
          </div>

          <div className="absolute bottom-0 flex gap-2  w-full justify-end p-4">
            <button onClick={()=>setModal(false)} className="border p-2 rounded-2xl border-[#FFD43B] text-[#FFD43B] cursor-pointer hover:bg-[#FFD43B] hover:text-white transition-all duration-300">Cancel</button>
            {
              vehicle?.Trips?.length !== 0 &&
            <button onClick={handleReport} className="border p-2 rounded-2xl border-[#FFD43B] bg-[#FFD43B] text-white cursor-pointer hover:bg-[#ecbe15] transition-all">Export</button>
            }
          </div>

          
        </div>
      </div>
    </div>
  );
}
