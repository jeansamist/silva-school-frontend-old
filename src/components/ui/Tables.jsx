import React from 'react';

export default function Table({
  thead = ['Name', 'Surname', 'E-mail'],
  tdata = [{ data: ['Towns', 'Marc Thomas', 'marctowns@mail.com'] }, { data: ['Brook', 'Jean', 'jeanbrook@mail.com'] }],
  onClick = () => {},
}) {
  return (
    <table>
      <thead>
        <tr>
          {thead.map((th, key) => (
            <th key={key}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tdata.map((tr, key) => (
          <tr
            key={key}
            onClick={() => {
              onClick(tr);
            }}
          >
            {tr.data.map((td, key2) => (
              <td key={key2}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
