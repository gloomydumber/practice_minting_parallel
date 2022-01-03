# practice_minting_parallel

NFT Minting UI 및 UX를 react를 rough하게 구현하고 heroku에 배포

NFT Minting 과정이 어떠한지 대략적으로 참고하도록 구현

## captcha 도입

```json
    "@hcaptcha/react-hcaptcha": "^1.0.0",
    "react-google-recaptcha": "^2.1.0",
    "styled-components": "^5.3.3",
```

hcaptcha와 google recaptcha가 객체하나를 공유해서 동시에 같이 쓰는 데 문제가 있음

해결 방안 고민 필요

## Need to Update

web3.js를 이용해 ETH test net이나 Solana 네트워크 등과의 연결을 통해 Minting 하는 방식의 경우도 경험할 수 있도록 구현

_useState_, _useMemo_, _useEffect_ 등을 좀 더 효과적으로 사용할 수 있어야 함

### takeaway

첫 번째로 휘갈겨 쓴 리액트 초미니 프로젝트

본인 부족으로 react로 해도 지저분 함...

컴포넌트 간 상태 관리에 대한 경험이 없어서 바로 recoil을 쓰고싶어졌음..

여러 프로젝트를 구현해 보고 상태관리에 대한 경험을 쌓아야 함
