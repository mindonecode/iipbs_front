import Image from "next/image";
import { images } from "@common/assets";

import "./login.css";

function LoginPage() {
  return (
    <div className="login fx">
      <div className="left_box fx">
        <div className="text">
          <h1>
            하수도정보시스템
            <br />
            <span>CMS 통합관리시스템</span>
          </h1>
          <p>하수도정보시스템 CMS 통합관리시스템에 오신 것을 환영합니다.</p>
        </div>
        <div className="img">
          <Image src={images.logo} width={229} height={46} alt="logo" />
        </div>
      </div>
      <form id="loginForm" name="loginForm" method="post">
        <div className="login_box fx">
          <ul className="fx">
            <li>
              <h2>ID</h2>
              <div className="input_st st1">
                <i className="diveicon di-account-box" />
                <input
                  type="text"
                  className="id"
                  title="아이디를 입력하세요."
                  id="id"
                  name="id"
                  maxLength={12}
                />
              </div>
            </li>
            <li>
              <h2>PASSWORD</h2>
              <div className="input_st st2">
                <i className="diveicon di-key" />
                <input
                  type="password"
                  className="input_style"
                  maxLength={25}
                  title="비밀번호를 입력하세요."
                  id="password"
                  name="password"
                />
              </div>
            </li>
          </ul>
          <div className="bottom_box fx">
            <div className="checks fx">
              <input
                type="checkbox"
                name="checkId"
                title="로그인ID 저장여부"
                id="checkId"
              />
              <label htmlFor="checkId">아이디저장</label>
            </div>
            {/* <a href="javascript:fnUserSearch();" className=" pw_message fx"><i className="xi-external-link"></i>비밀번호 또는 아이디를 잃어버리셨나요?</a> */}
          </div>
          <a className="login_btn fx">
            <span>LOGIN</span>
          </a>
          <div className="footer">
            <div className="copy fx">
              <p>copyright © 2023 KECO. All rights reserved.</p>
            </div>
            <div className="fot_btn fx">
              <a
                href="https://keco.or.kr/web/lay1/S1T6C1348/contents.do"
                target="_blank"
              >
                개인정보처리방침
              </a>
              <a
                href="https://keco.or.kr/web/lay1/S1T6C1349/contents.do"
                target="_blank"
              >
                저작권정책안내
              </a>
              <a
                href="https://keco.or.kr/web/lay1/S1T6C1350/contents.do"
                target="_blank"
              >
                이메일무단수집거부
              </a>
            </div>
            <p className="addr fx">
              <span>
                주소 : (22689) 인천광역시 서구 환경로 42(경서동
                종합환경연구단지)
              </span>
              <span>
                전화 : (시스템) 032-590-4321, 3752, 4314 / (통 계) 032-590-3723,
                3722
              </span>
              <span>팩스 :032-590-3729</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export { LoginPage };
