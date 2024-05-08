// 오늘 날짜
// let today = new Date(); // 현재 데이터
// let year = today.getFullYear(); // 년도
// let month = today.getMonth() + 1;  // 월
// let date = today.getDate();  // 일
// document.write(year + '년 ' + month + '월 ' + date + '일')

// 일정 데이터
let scheduleData = {
    "2024-01-01": "1일 - 새해",
    "2024-01-02": "2일 - 보건간호 현장실습 시작일(2학년)",
    "2024-01-07": "7~8일 - 학급발표회 기간(1, 2학년)",
    "2024-01-08": "",
    "2024-01-09": "9일 - 종업식(1,2학년), 49회 졸업식(3학년)",
    // 2월 없으무

    "2024-03-01": "1일 - 삼일절",
    "2024-03-04": "4일 - 시업식 및 입학식",
    "2024-03-11": "11일 - 새학기 상담 주간",
    "2024-03-21": "21일 - 환경정화의 날",
    "2024-03-22": "22일 - 학부모총회, 학교운영위원선거",
    "2024-03-28": "28일 - 전국연합 학력평가",

    "2024-04-08": "8일 - 도서관 주간",
    "2024-04-10": "10일 - 국회의원 선거",
    "2024-04-12": "12 - 도선관의 날, 글쓰기 경연대회",
    "2024-04-22": "22~24일 - 1차 지필고사 기간",
    "2024-04-23": "",
    "2024-04-24": "",
    "2024-04-29": "29일 - 진로진학 컨설팅 주간(3학년)",

    "2024-05-06": "6일 - 대체공휴일()",
    "2024-05-10": "10일 - 개교기념행사 및 덕영제",
    "2024-05-13": "13일 - 개교기념재량휴일",
    "2024-05-15": "15일 - 부처님오신날",
    "2024-05-20": "20일 - 진로진학 컨설팅 주간(1학년)",
    "2024-05-23": "23일 - 진로의 날",

    "2024-06-03": "3일 - 직업기초능력 자가진단 시작일",
    "2024-06-04": "4일 - 전국연합학력평가, 대학수학능력시험 모의평가",
    "2024-06-06": "6일 - 현충일",
    "2024-06-28": "28일 - 직업기초능력 자가진단 종료일",

    "2024-07-02": "2~5일 - 2차 지필고사 기간",
    "2024-07-03": "",
    "2024-07-04": "",
    "2024-07-05": "",
    "2024-07-08": "8일 - 진로진락 컨설팅 주간(2,3학년)",
    "2024-07-09": "9~11일 - 직업기초능력평가(3학년)",
    "2024-07-10": "",
    "2024-07-11": "",
    "2024-07-12": "12일 - 독서포트폴리오대회, 학생회장선거",
    "2024-07-15": "15일 - 보건간호 현장실습 시작일(2학년)",
    "2024-07-22": "22일 - 방학식",

    "2024-08-15": "15일 - 광복절",
    "2024-08-16": "16일 - 개학식",
    "2024-08-18": "18일 - 보건간호 현장실습 종료일(2학년)",

    "2024-09-02": "2일 - 고교학점제 교과목 선택 주간(1,2학년)",
    "2024-09-04": "4일 - 전국연합학력평가, 대학수학능력시험 모의평가",
    "2024-09-05": "5일 - 환경정화의 날",
    "2024-09-06": "6일 - 교육과정 및 진로진학 설명회, 공개수업의 날",
    "2024-09-16": "16~18일 - 추석",
    "2024-09-17": "",
    "2024-09-18": "",
    "2024-09-27": "27일 - 체육대회",

    "2024-10-03": "3일 - 개천절",
    "2024-10-09": "9일 - 한글날",
    "2024-10-21": "21~24일 - 1차 지필고사 기간",
    "2024-10-22": "",
    "2024-10-23": "",
    "2024-10-24": "",
    "2024-10-25": "25일 - 현장체험학습",
    "2024-10-28": "28일 - 독서의 달 주간",

    "2024-11-04": "4~6일 - 신입생 특별전형 기간",
    "2024-11-05": "",
    "2024-11-06": "",
    "2024-11-08": "8일 - 신입생 특별전형 면접",
    "2024-11-11": "11일 - 신입생 특별전형 합격자 발표일",
    "2024-11-13": "13일 - 대학수학능력시험 예비소집",
    "2024-11-14": "14일 - 대학수학능력 시험",
    "2024-11-15": "15일 - 학교장 재량휴업일",
    "2024-11-18": "18~19일 - 신입생 일반정형 기간",
    "2024-11-19": "",
    "2024-11-21": "21일 - 신입생 일반정형 면접",

    "2024-12-13": "13일 - 신입생 예비소집",
    "2024-12-19": "19~24일 - 2차 지필고사 기간",
    "2024-12-20": "",
    "2024-12-23": "",
    "2024-12-24": "",
    "2024-12-27": "27일 - 진급,졸업사정회",
    "2024-12-30": "30일 - 진로진학 컨설팅 주간(1,2학년)",
    "2024-12-31": "31일 - 스마일 스피치 경연대회",

    // 필요한 만큼 날짜와 일정을 추가할 수 있노라
  };

// 쉬는날
const holidayData = {
    "2024-01-01": "1일 - 새해",
    "2024-03-01": "1일 - 삼일절",
    "2024-04-10": "10일 - 국회의원 선거",
    "2024-05-06": "대체공휴일",
    "2024-05-13": "개교기념재량휴일",
    "2024-05-15": "부처님오신날",
    "2024-06-06": "6일 - 현충일",
    "2024-08-15": "15일 - 광복절",
    "2024-09-16": "16~18일 - 추석",
    "2024-09-17": "",
    "2024-09-18": "",
    "2024-10-03": "3일 - 개천절",
    "2024-10-09": "9일 - 한글날",
    "2024-11-14": "14일 - 대학수학능력 시험",
    "2024-11-15": "15일 - 학교장 재량휴업일",
  };
  // 방학
//   const vacationData = {
//     "2024-07-23": "23일 - 방학",
//     "2024-07-24": "24일 - 방학",
//     "2024-07-25": "25일 - 방학",
//     "2024-07-26": "26일 - 방학",
//     "2024-07-27": "27일 - 방학",
//     "2024-07-28": "28일 - 방학",
//     "2024-07-29": "29일 - 방학",
//     "2024-07-30": "30일 - 방학",
//     "2024-07-31": "31일 - 방학",
//     "2024-08-1": "1일 - 방학",
//     "2024-08-2": "2일 - 방학",
//     "2024-08-3": "3일 - 방학",
//     "2024-08-4": "4일 - 방학",
//     "2024-08-5": "5일 - 방학",
//     "2024-08-6": "6일 - 방학",
//     "2024-08-7": "7일 - 방학",
//     "2024-08-8": "8일 - 방학",
//     "2024-08-9": "9일 - 방학",
//     "2024-08-10": "10일 - 방학",
//     "2024-08-11": "11일 - 방학",
//     "2024-08-12": "12일 - 방학",
//     "2024-08-13": "13일 - 방학",
//     "2024-08-14": "14일 - 방학",
//   }

  //검색기능 함수
  function searchSchedule() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const detailContainer = document.getElementById('detail-container');
  const calendarContainer = document.getElementById('calendar-container');
  const scheduleEntries = Object.entries(scheduleData);

  // 입력된 검색어가 없을 경우, 해당 달의 학사 일정만 표시
  if (input === '') {
    detailContainer.innerHTML = '';
    calendarContainer.innerHTML = ''; // 검색 결과를 표시하기 위해 원래 달력 삭제
    const currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth()); // 현재 달력 생성
    return;
  }

  // 검색어를 포함하는 일정만 표시
  const filteredScheduleEntries = scheduleEntries.filter(([date, schedule]) =>
    schedule.toLowerCase().includes(input)
  );

  if (filteredScheduleEntries.length === 0) {
    // 검색 결과가 없는 경우 메시지 표시
    detailContainer.innerHTML = '검색 결과가 없습니다.';
    calendarContainer.innerHTML = ''; // 검색 결과를 표시하기 위해 원래 달력 삭제
  } else {
    // 검색 결과를 사이드바에 표시하고 해당하는 날짜의 달력으로 이동
    detailContainer.innerHTML = '';
    calendarContainer.innerHTML = ''; // 검색 결과를 표시하기 위해 원래 달력 삭제
    filteredScheduleEntries.forEach(([date, schedule]) => {
      const detailText = document.createElement('div');
      detailContainer.appendChild(detailText);
    });

    const firstResultDate = new Date(filteredScheduleEntries[0][0]);
    generateCalendar(firstResultDate.getFullYear(), firstResultDate.getMonth());
  }
}

  //12
  function searchSchedule() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const detailContainer = document.getElementById('detail-container');
  const calendarContainer = document.getElementById('calendar-container');
  const scheduleEntries = Object.entries(scheduleData);

  // 검색 결과를 담을 변수
  const filteredScheduleEntries = [];

  // 입력된 검색어와 일정을 비교하여 일치하는 일정만 filteredScheduleEntries에 추가
  scheduleEntries.forEach(([date, schedule]) => {
    if (schedule.toLowerCase().includes(input)) {
      filteredScheduleEntries.push([date, schedule]);
    }
  });

  if (input === '') {
    // 검색어가 없을 경우 기존 달력 표시
    detailContainer.innerHTML = '';
    calendarContainer.innerHTML = ''; 
    const currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth()); 
    return;
  }

  if (filteredScheduleEntries.length === 0) {
    // 일치하는 일정이 없는 경우 메시지 표시
    detailContainer.innerHTML = '검색 결과가 없습니다.';
    calendarContainer.innerHTML = '';
  } else {
    // 일치하는 일정 표시 및 관련된 달의 달력 생성
    detailContainer.innerHTML = '';
    calendarContainer.innerHTML = '';
    
    filteredScheduleEntries.forEach(([date, schedule]) => {
      const detailText = document.createElement('div');
      detailContainer.appendChild(detailText);
    });

    // 필터링된 일정에서 고유한 달 추출
    const uniqueMonths = new Set();
    filteredScheduleEntries.forEach(([date, _]) => {
      const monthYear = date.split('-').slice(0, 2).join('-');
      uniqueMonths.add(monthYear);
    });

    // 고유한 달에 대한 달력 생성
    uniqueMonths.forEach(monthYear => {
      const [year, month] = monthYear.split('-').map(Number);
      generateCalendar(year, month - 1); // JavaScript의 월은 0부터 시작하므로 1을 빼줍니다.
    });
  }
}


  // 달력 생성 함수
  function generateCalendar(year, month) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const daysInMonth = endDate.getDate();

    
    const calendarContainer = document.getElementById("calendar-container");
    const monthTitle = document.createElement("h2");
    monthTitle.textContent = `${year}년 ${month + 1}월`; // 0월 부터 시작하기 떄문에 +1 해줌 // 일은 수동....;;
    calendarContainer.appendChild(monthTitle);

    const table = document.createElement("table");
    table.classList.add("calendar");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const detailContainer = document.getElementById("detail-container");

    // 요일 배열
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    // 요일 레이블 추가
    const headerRow = document.createElement("tr");
    daysOfWeek.forEach(day => {
      const th = document.createElement("th");
      th.textContent = day;
      headerRow.appendChild(th);
    });
    tbody.appendChild(headerRow);

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDate.getDay()) {
          const cell = document.createElement("td");
          cell.className += "cell-td" // class 추가
          // cell.className += "schedule-table" // class 추가
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          const cell = document.createElement("td");
          cell.className += "cell-td" // class 추가
          // cell.className += "schedule-table" // class 추가
          const currentDate = new Date(year, month, date + 1); // 달력 일정표시가 하루씩 밀려있으므로 +1을 함
          cell.textContent = date;
          if (currentDate.toISOString().slice(0,10) in scheduleData) {
            cell.title = scheduleData[currentDate.toISOString().slice(0,10)];
            cell.classList.add('has-schedule'); // 일정이 있는 날에 클래스 추가


          // (코드 추가) 
          if (currentDate.toISOString().slice(0, 10) in holidayData) {
                    cell.classList.add('has-holiday'); // 특별한 일정이 있는 날에 클래스 추가
                } // (코드 추가)
            const detailText = document.createElement('div');
            detailText.textContent = scheduleData[currentDate.toISOString().slice(0,10)];
            detailContainer.appendChild(detailText);
          }
        

          row.appendChild(cell);
          date++;
        }
      }
      tbody.appendChild(row);
      if (date > daysInMonth) {
        break;
      }
    }

    calendarContainer.appendChild(table);

    // 사이더 학사일정
    const cellsWithSchedule = document.querySelectorAll('.has-schedule');

    cellsWithSchedule.forEach(cell => {
      cell.addEventListener('mouseover', function(e) {
        const detailPopup = document.createElement('div');
        detailPopup.classList.add('detail-popup');
        detailPopup.textContent = scheduleData[new Date(year, month, parseInt(cell.textContent)).toISOString().slice(0,10)];
        cell.appendChild(detailPopup);
      });
      cell.addEventListener('mouseout', function(e) {
        const detailPopup = cell.querySelector('.detail-popup');
        if (detailPopup) {
          detailPopup.remove();
        }
      });
    });
  }

  // 달력 전체 생성 함수
  function generateFullCalendar() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    for (let month = 0; month < 12; month++) {
      generateCalendar(currentYear, month);
    }
  }

let currentDate = new Date();

const load = () => {
    const calendarContainer = document.getElementById("calendar-container");
    calendarContainer.innerHTML = '';
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = ''; // 기존 세부 일정 삭제
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth())
}

addEventListener("load", load)

addEventListener("keydown", ({ key }) => { // 좌우키로 달력 넘김
    if (key === "ArrowRight") {
        currentDate.setMonth(currentDate.getMonth() + 1)
    }
    else if (key === "ArrowLeft") {
        currentDate.setMonth(currentDate.getMonth() - 1)
    }

    load();
})


// addEventListener("keydown", ({ key }) => { // 상하키로 달력 넘김
//     if (key === "ArrowUp") {
//         currentDate.setMonth(currentDate.getMonth() + 1)
//     }
//     else if (key === "ArrowDown") {
//         currentDate.setMonth(currentDate.getMonth() - 1)
//     }

//     load();
// })

// addEventListener("keydown", ({ key }) => { 
//     if (key === " ") {
//         currentDate.setMonth(currentDate.getMonth())
//     }
//     return;

//     load();
// })




// 스페이스바 눌렀을 때 현재 달 출력
// 관리자 권한 있으면 변경 가능
//드롭다운 , 화살표로 움직이는거, 호버시 오른쪽 학사일정에 호버된 일정만 뜨게
