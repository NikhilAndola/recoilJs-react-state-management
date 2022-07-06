import React from 'react';
import './style.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <h1>Recoil js!</h1>
    </RecoilRoot>
  );
}
