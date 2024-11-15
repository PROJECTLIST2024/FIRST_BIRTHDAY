// 카톡공유(https://developers.kakao.com/docs/latest/ko/message/js-link#default-template-msg-custom)

  // SDK를 초기화 사용할 앱의 JavaScript 키를 설정
  Kakao.init('35481e755a06a698f1386b01229e21f8');

  // SDK 초기화 여부 판단
  console.log(Kakao.isInitialized()); 


const kakaoShare =  document.querySelector('.kakao-share');
kakaoShare.addEventListener('click',function(){

    console.log("window.location.origin",window.location.origin);
 
    // 직접 버튼 사용하는 메시지 탬플릿(위치)
    Kakao.Share.sendDefault({
        objectType: 'location',
        address: '대구광역시 북구 유통단지로 80',
        addressTitle: '인터불고 엑스코 라그라나',
        content: {
          title: '이서의 돌잔치에 초대합니다 🎂',
          description: '2025년 02월 01일 (토) 오후 1시 30분',
          imageUrl: "https://projectlist2024.github.io/FIRST_BIRTHDAY/images/01_section.jpg",
          link: {
            mobileWebUrl: window.location.origin + "/FIRST_BIRTHDAY/",
            webUrl: window.location.origin + "/FIRST_BIRTHDAY/",,
          },
        },

        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: window.location.origin + "/FIRST_BIRTHDAY/",
              webUrl: window.location.origin + "/FIRST_BIRTHDAY/",
            },
          },
        ],
      });

})



//   function kakaoShare() {
//     Kakao.Link.sendDefault({
//       objectType: 'feed',
//       content: {
//         title: '카카오공유하기 시 타이틀',
//         description: '카카오공유하기 시 설명',
//         imageUrl: '카카오공유하기 시 썸네일 이미지 경로',
//         link: {
//           mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
//           webUrl: '카카오공유하기 시 클릭 후 이동 경로',
//         },
//       },
//       buttons: [
//         {
//           title: '웹으로 보기',
//           link: {
//             mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
//             webUrl: '카카오공유하기 시 클릭 후 이동 경로',
//           },
//         },
//       ],
//       // 카카오톡 미설치 시 카카오톡 설치 경로이동
//       installTalk: true,
//     })
//   }






// 링크공유
const urlCopy = document.querySelector('.url-copy');
urlCopy.addEventListener('click',function(){
        //클립보드에 복사
         window.navigator.clipboard.writeText(window.location.href) ;
})

