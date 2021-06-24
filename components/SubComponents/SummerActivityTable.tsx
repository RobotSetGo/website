import React from "react";

export default function SummerActivityTable() {
  return (
    <div className="">
      <table className="table table-fixed border-separate border text-2xl mt-4">
        <thead>
          <tr className="table-row bg-blue-100">
            <th className="w-1/4 border">Ωρα</th>
            <th className="w-1/2 border">Ασχολία</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="w-1/4 border px-4">08:00</td>
            <td className="w-1/2 border px-4">Προσέλευση</td>
          </tr>
          <tr className="table-row">
            <td className="w-1/4 border px-4">10:00</td>
            <td className="w-1/2 border px-4">Διάλειμμα</td>
          </tr>
          <tr className="table-row">
            <td className="w-1/4 border px-4">12:00</td>
            <td className="w-1/2 border px-4">Αποχώρηση - Προσέλευση</td>
          </tr>
          <tr className="table-row">
            <td className="w-1/4 border px-4">14:00</td>
            <td className="w-1/2 border px-4">Διάλειμμα</td>
          </tr>
          <tr className="table-row">
            <td className="w-1/4 border px-4">16:00</td>
            <td className="w-1/2 border px-4">Αποχώρηση</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
