import './index.css';
import liff from '@line/liff';

document.addEventListener('DOMContentLoaded', function () {



  liff
    .init({
      liffId: '1657419934-Jla7p0KM',
      // withLoginOnExternalBrowser: true, // Enable automatic login process
    })
    .then(() => {
      console.log('Success! you can do something with LIFF API here.');

      if (!liff.isLoggedIn()) {
        liff.login();
      }
      
      if (!liff.isInClient()) {
        console.log('Liff is NOT in line app.');
      }

      liff
        .getProfile()
        .then(function (profile) {
          const userId = profile.userId;
          const name = profile.displayName;
          const pictureUrl = profile.pictureUrl;
          const statusMessage = profile.statusMessage;

          liff.getFriendship().then(function (friendshipStatus) {
            document.body.innerHTML +=
              '<div style="position:absolute;width:100%;height:100%;">' +
              '使用者 Id: ' + userId + '<br/>' +
              '使用者名稱: ' + name + '<br/>' +
              'Status Message: ' + statusMessage + '<br/>' +
              '綁定狀態: ' + (friendshipStatus.friendFlag ? '已加入好友' : '未加入好友') + '<br/>' +
              '<img src="' + pictureUrl + '" height=100 width=100><br/>' +
              '</div>';
            // liff.logout(); // 登出方便測試
          });

          console.log('cookie: ', document.cookie);
        }).catch(function (error) {
          console.log('error', error);
        });
    });
});
