interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Mombasa",
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
const header2 = document.createElement("th");
header1.textContent = "First Name";
header2.textContent = "Location";
headerRow.append(header1, header2);
table.appendChild(headerRow);

// Add student data to the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.append(firstNameCell, locationCell);
  table.appendChild(row);
});

// Append table to the document body
document.body.appendChild(table);
