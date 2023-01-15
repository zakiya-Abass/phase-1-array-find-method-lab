// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(record) {
  let newRecord = record.find((member) => member.result === "W");
  if (newRecord === undefined) return undefined;
  else return newRecord.year;
}
superbowlWin(record);
