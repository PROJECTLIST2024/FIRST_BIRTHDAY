const party_date = new Date("2025-02-01");
const party_hours = "오후 01시 30분";

// CALENDAR FUNCTION 
const cal_calender = (party_date, time) => {
    const calendarYear = party_date.getFullYear();          // 달력 연도
    const calendarMonth = party_date.getMonth() + 1;        // 달력 월
    const calendarToday = party_date.getDate();             // 달력 일
    const monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();  // 마지막 일자
    const monthStartDay = new Date(calendarYear, calendarMonth - 1, 1).getDay(); // 월 시작 요일

    const d_day = calendarToday; // D-day를 오늘 날짜로 설정 (추후 필요시 수정 가능)

    // 01SECTION 헤더 연도, 월, 일 랜더링
    const Section01topDateEl = document.querySelector('.wrapper nav>div:nth-child(1)');
    Section01topDateEl.innerHTML = `${calendarYear} <span style=font-size:1.5rem>/</span> ${calendarMonth.toString().padStart(2, '0')} <span style=font-size:1.5rem>/</span> ${calendarToday.toString().padStart(2, '0')}`;

    // 요일 렌더링
    const yoilEl = document.querySelector('.wrapper nav>div:nth-child(2)');
    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    yoilEl.innerHTML = daysOfWeek[party_date.getDay()];

    // 01SECTION DATETIME에 연월일 요일 랜더링
    const section01DatetimeEl = document.querySelector('.wrapper>main>section:nth-child(1) .datetime');
    section01DatetimeEl.innerHTML = `${calendarYear} 년 ${calendarMonth.toString().padStart(2, '0')} 월 ${calendarToday.toString().padStart(2, '0')} 일`;

    const section01HoursEl = document.querySelector('.wrapper>main>section:nth-child(1) .bottom .hours');
    section01HoursEl.innerHTML = time;

    // 화면에 달력 랜더링
    const topDateEl = document.querySelector('.wrapper>main>section:nth-child(4) .top-date');
    topDateEl.innerHTML = `${calendarYear}.${calendarMonth.toString().padStart(2, '0')}.${calendarToday.toString().padStart(2, '0')}`;

    // TOP-HOURS (요일과 시간)
    const topHoursEl = document.querySelector('.wrapper>main>section:nth-child(4) .top-hours');
    topHoursEl.innerHTML = `${daysOfWeek[party_date.getDay()]} ${time}`;

    // 달력 그리기 (요일별 날짜 표시)
    let day = 1;
    const tdStartEls = document.querySelectorAll(".wrapper>main>section:nth-child(4) table td.start-days");
    tdStartEls.forEach(tdEl => {
        const start_no = tdEl.getAttribute('data-start');
        if (start_no >= monthStartDay) tdEl.innerHTML = day++;
    });

    const tdEtcEls = document.querySelectorAll(".wrapper>main>section:nth-child(4) table td.days");
    tdEtcEls.forEach(tdEl => {
        if (day <= monthLastDate) tdEl.innerHTML = day++;
    });

    // D-DAY 표시
    const tdEls = document.querySelectorAll(".wrapper>main>section:nth-child(4) table td");
    tdEls.forEach(tdEl => {
        if (parseInt(tdEl.innerHTML) === d_day) tdEl.classList.add('d-day');
    });
};

cal_calender(party_date, party_hours);

// D DAY FUNCTION
const dayEls = document.querySelectorAll('.wrapper>main>section:nth-child(4) .bottom .day>span');
const hoursEl = document.querySelector('.wrapper>main>section:nth-child(4) .bottom .hours>span');
const minEl = document.querySelector('.wrapper>main>section:nth-child(4) .bottom .min>span');
const secEl = document.querySelector('.wrapper>main>section:nth-child(4) .bottom .sec>span');

const d_day_func = (partyDate) => {
    const todayTime = new Date();
    const diff = partyDate - todayTime;

    let diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    let diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let diffMin = Math.floor((diff / (1000 * 60)) % 60);
    let diffSec = Math.floor(diff / 1000 % 60);

    // D-DAY 랜더링
    dayEls.forEach(dayEl => dayEl.innerHTML = diffDay.toString().padStart(2, '0'));
    hoursEl.innerHTML = diffHour.toString().padStart(2, '0');
    minEl.innerHTML = diffMin.toString().padStart(2, '0');
    secEl.innerHTML = diffSec.toString().padStart(2, '0');
};

// DDAY 최초 실행
d_day_func(party_date);

// D Day 반복 비동기
setInterval(() => {
    d_day_func(party_date);
}, 1000);
