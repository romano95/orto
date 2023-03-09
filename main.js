let a = "https://checkout.stripe.com/c/pay/cs_live_a1CeU0wsVufws27o7yzgErkF7iBeelVnE6oSzE1PBk3Z3zNLqmFEtb9h2K#fidkdWxOYHwnPyd1blppbHNgWjA0SVBHNF1HQzF%2FSUBPYjdrckJsPEw0f0lKczdgb0ZQaFRrZ1dsUHJpU3dSa3RXa2ExdGhncjc8NWhUME09Z0RtQmkzfVByandkTFxuV2R2XUFKN1Azbl1nNTV%2FbzxRPEB1ZycpJ3VpbGtuQH11anZgYUxhJz8nZ0xcZE1GMzxdMUpRMU9SM2p3Jyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl"

const btn = document.querySelector("#btn_jeton");
btn.addEventListener('click', () => {
    document.location.assign(a)
});


new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});












