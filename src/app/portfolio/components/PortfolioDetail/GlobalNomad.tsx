"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";

export default function GlobalNomad() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>GlobalNomad</p>
        <div className={styles.thumbnailLink}>
          <Link
            href="https://globalnomad-t2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/GlobalNomad/GlobalNomadTN.png"
              alt="GlobalNomad 대표 썸네일"
              width={600}
              height={400}
              className={styles.thumbnail}
            />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Details</p>

        {/* Functions */}
        <div className={styles.detailContainer}>
          <ul>
            <p className={styles.semiTitle}>🔎 대표 기능 </p>
            <div className={styles.detailList}>
              <li>
                <p className={styles.detailTItle}>롤링페이퍼 </p>
                <p className={styles.contentText}>
                  나만의 롤링페이퍼를 만들고, 누군가가 남기는 메세지를 받을 수
                  있어요.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>메세지보내기</p>
                <p className={styles.contentText}>
                  내가 원하는 사람에게 메세지를 보내기가 가능합니다.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>인기 롤링페이퍼</p>
                <p className={styles.contentText}>
                  상대방에 대한 내 기분을 이모지로 표현 할 수 있어요.
                </p>
              </li>
            </div>
          </ul>
        </div>

        {/* lang & Tools */}
        <div className={styles.detailContainer}>
          <p className={styles.semiTitle}>🔗 언어 및 툴 </p>
          <div className={styles.detailList}>
            <Image
              className={styles.logoImg}
              src="/logo/typescript.png"
              alt="ts"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/react.png"
              alt="react"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/reactQuery.svg"
              alt="react query"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/moduleCSS.png"
              alt="module css"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/vercel.svg"
              alt="vercel"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/prettier.svg"
              alt="prettier"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/ESLint.png"
              alt="ESLint"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/zod.png"
              alt="zod"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/zustand.webp"
              alt="zustand"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/storybook.png"
              alt="storybook"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* R & R */}
        <div className={styles.detailContainer}>
          <p className={styles.semiTitle}>📄 R & R</p>
          <div className={styles.detailList}>
            <ul className={styles.rnrList}>
              <li>
                <p className={styles.semiTitle}>API</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Axios 인스턴스를 활용해 인증 기반 API 설정 및 인터셉터
                      구성
                    </li>
                    <li>
                      모든 요청에 토큰을 자동 포함시키고, 401 응답 시
                      refreshToken으로 갱신 및 재요청 처리
                    </li>
                    <li>
                      SSR 대응을 위해 localStorage 대신 쿠키 기반(JWT) 인증 방식
                      적용
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      토큰 인증 흐름, 401 처리, 자동 로그아웃 등 보안 중심의
                      에러 핸들링 경험
                    </li>
                    <li>클라이언트와 서버의 인증 처리 방식 차이를 이해함</li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>prefetch 시 토큰 미적용으로 요청 실패 발생</li>
                    <li>
                      SSR 환경에서의 쿠키 인증 처리를 더 정교하게 나눌 필요가
                      있었음
                    </li>
                  </div>
                </ul>
              </li>

              <li>
                <p className={styles.semiTitle}>Query hooks</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      API 호출 로직을 커스텀 훅으로 추상화하여 재사용 가능한
                      구조로 설계
                    </li>
                    <li>
                      네이밍과 구조 일관성 유지로 가독성과 유지보수성 향상
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      QueryKey, QueryFn 등 공통 구조 패턴화를 통해 팀 협업에
                      적합한 구조 학습
                    </li>
                    <li>
                      에러 및 로딩 상태를 일관성 있게 처리하는 흐름의 중요성
                      체감
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>기존 훅들을 수정해서 써야 하는 경우가 많아짐</li>
                    <li>mutation과 query의 초기 분리 부족</li>
                  </div>
                </ul>
              </li>

              <li>
                <p className={styles.semiTitle}>내 정보 페이지</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      항상 노출되던 입력창을 UX 개선을 위해 모달 기반 UI로 변경
                    </li>
                    <li>
                      사용자 정보는 useUser 훅으로 관리, 수정 시 useMutation을
                      활용해 서버에 반영
                    </li>
                    <li>
                      수정 후 setState와 refetch로 변경 사항을 화면에 반영
                    </li>
                    <li>로딩 상태는 framer-motion으로 처리하여 UX 향상</li>
                    <li>
                      lighthouse 점수를 고려해 최적화를 위한 리팩토링 진행
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>모달 기반 UX 설계의 흐름을 고민하며 개선</li>
                    <li>
                      useMutation과 query hook으로 데이터 흐름 제어 방식 학습
                    </li>
                    <li>
                      기능 구현을 넘어, UI 노출 타이밍에 대한 설계 중요성 체감
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      invalidateQueries 대신 refetch와 setState를 사용해 구조적
                      통일성이 떨어짐
                    </li>
                  </div>
                </ul>
              </li>

              <li>
                <p className={styles.semiTitle}>예약 현황 페이지</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      react-calendar와 아이콘을 조합해 날짜별 예약 상태 시각화
                    </li>
                    <li>다양한 상태와 시간대 필터링을 위한 모달 UI 구성</li>
                    <li>
                      상태 변경은 useMutation으로 처리하고 invalidateQueries로
                      쿼리 갱신
                    </li>
                    <li>
                      lighthouse 점수를 고려해 최적화를 위한 리팩토링 진행
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>복잡한 상태 관리 및 데이터 갱신 전략의 중요성 학습</li>
                    <li>상태와 UI 시각화를 연결하는 구조 설계 경험</li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      상태 변경 후 UI 반영이 즉각적이지 않은 부분 존재, 로직이
                      복잡해져 유지보수가 어려워짐
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Overview</p>
        <p className={styles.semiTitle}>메인 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad1.png"
          alt="GlobalNomad main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>체험 상세 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad2.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad2-1.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>내 정보 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad3.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>예약 내역 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad4.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>내 체험 관리 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad5.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad5-1.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>예약 현황 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/GlobalNomad/GlobalNomad6.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.title}>Repository</p>
        <Link
          href="https://github.com/T2-GlobalNomad/GlobalNomad"
          target="_blank"
        >
          <div className={styles.githubLogo}>
            <Image
              src="/logo/github.png"
              alt="github repository"
              width={150}
              height={150}
              className={styles.githubLogo}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
