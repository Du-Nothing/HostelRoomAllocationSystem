document.addEventListener('DOMContentLoaded', function() {
    // Example data for room allocations
    const allocations = [
      { name: 'Rajnish', roomType: 'Single', proximity: 'Close', specialReq: 'None', allocatedRoom: 'Room 101' },
      { name: 'Sonu', roomType: 'Double', proximity: 'Moderate', specialReq: 'None', allocatedRoom: 'Room 102' }
    ];
  
    const tableBody = document.getElementById('allocationTable');
  
    allocations.forEach((allocation) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${allocation.name}</td>
        <td>${allocation.roomType}</td>
        <td>${allocation.proximity}</td>
        <td>${allocation.specialReq}</td>
        <td>${allocation.allocatedRoom}</td>
        <td><button onclick="reallocateRoom('${allocation.name}')">Reallocate</button></td>
      `;
  
      tableBody.appendChild(row);
    });
  });
  
