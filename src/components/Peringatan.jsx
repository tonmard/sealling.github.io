import React from "react";

const Peringatan = () => {
  return (
    <div id="earlywarning" className="w-full py-20 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Ingin Dapatkan Pemberitahuan Darurat?
          </h1>
          <p>Daftarkan dirimu sekarang!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Masukan Email"
            />
            <button className="bg-white hover:bg-slate-100 text-slate-900 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peringatan;
