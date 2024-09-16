"use client";

import { useUsers } from "@/lib/firestore/user/read";
import { Avatar, Button, CircularProgress } from "@nextui-org/react";

export default function ListView() {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex-1 flex flex-col gap-3 md:pr-5 md:px-0 px-5 rounded-xl">
      <table className="border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th className="font-semibold border-y bg-white px-3 py-2 border-l rounded-l-lg">
              SN
            </th>
            <th className="font-semibold border-y bg-white px-3 py-2">Photo</th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">
              Name
            </th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return <Row index={index} item={item} key={item?.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

function Row({ item, index }) {
  return (
    <tr>
      <td className="border-y bg-white px-3 py-2 border-l rounded-l-lg text-center">
        {index + 1}
      </td>
      <td className="border-y bg-white px-3 py-2 text-center">
        <div className="flex justify-center">
          <Avatar src={item?.photoURL} />
        </div>
      </td>
      <td className="border-y bg-white px-3 py-2">{item?.displayName}</td>
      <td className="border-y bg-white px-3 py-2">{item?.email}</td>
    </tr>
  );
}
