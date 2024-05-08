function searchSchedule() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase().replace(/\s+/g, ''); // 띄어쓰기 제거
    table = document.getElementById("scheduleTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1]; // 두 번째 열(일정)을 기준으로 검색

      if (td) {
        txtValue = td.textContent || td.innerText;
        var formattedText = txtValue.toUpperCase().replace(/\s+/g, ''); // 띄어쓰기 제거
        if (formattedText.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // 엔터키 입력 시 검색 실행
  document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchSchedule();
    }
  });

  // 날짜를 오름차순으로 정렬
  var tbody = document.querySelector('#scheduleTable tbody');
  var rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort(function(rowA, rowB) {
    var dateA = new Date(rowA.cells[0].textContent);
    var dateB = new Date(rowB.cells[0].textContent);
    return dateA - dateB;
  });

  rows.forEach(function(row) {
    tbody.appendChild(row);
  });