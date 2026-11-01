import type { Ember } from "../types/Ember";

export const Felotolt = (e: Ember) => {
  return (
    <tr>
      <td>{e.id}</td>
      <td>{e.nev}</td>
      <td>{e.kor}</td>
      <td>{e.nem}</td>
    </tr>
  );
};
