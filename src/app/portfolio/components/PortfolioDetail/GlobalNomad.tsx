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
          <Link href="https://globalnomad-t2.vercel.app/">
            <Image
              src="/images/GlobalNomad/GlobalNomadTN.png"
              alt="GlobalNomad 대표 썸네일"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />{" "}
          </Link>
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
                <p className={styles.rnrIndex}>제작방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Axios 인스턴스를 활용한 인증 기반 API 설정 및 인터셉터
                      구성
                    </li>
                    <li>
                      모든 요청에 자동으로 토큰을 포함하고, 401 응답 시
                      refreshToken으로 갱신 및 재요청 처리
                    </li>
                    <li>
                      SSR 대응을 위해 localStorage 대신 쿠키 기반(JWT) 인증 방식
                      사용
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      토큰 인증 흐름과 401 처리, 자동 로그아웃 처리 등 보안
                      중심의 에러 핸들링을 경험
                    </li>
                    <li>
                      클라이언트/서버 구분에 따른 인증 처리 방식의 차이를 이해함
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>prefetch 시 토큰이 적용되지 않아 요청이 실패함</li>
                    <li>
                      SSR 상황에서 쿠키 기반 인증 처리가 더 정교하게 분리될
                      필요가 있었음
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <p className={styles.semiTitle}>Query hooks</p>
                <p className={styles.rnrIndex}>제작방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      API 호출 로직을 커스텀 훅으로 추상화하여 컴포넌트에서
                      재사용 가능하도록 설계
                    </li>
                    <li>
                      네이밍과 구조를 일관되게 유지하여 가독성과 유지보수성을
                      높임
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      공통 구조(QueryKey, QueryFn) 패턴화를 통해 팀 단위 개발에
                      적합한 구조를 익힘
                    </li>
                    <li>
                      상태 관리 흐름에서 에러/로딩 처리 일관화의 중요성을 체감
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      초기에 기대했던 것과는 달리, 기존 hook들을 변형하여 사용할
                      일이 많아짐
                    </li>
                    <li>
                      mutation과 query를 초기 세팅시에 적절히 분리하지 못한 것이
                      아쉬움
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <p className={styles.semiTitle}>내 정보 페이지</p>
                <p className={styles.rnrIndex}>제작방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      초기에는 입력창이 항상 노출되는 구조였으나, UX 개선을 위해
                      모달 기반 수정 UI로 변경
                    </li>
                    <li>
                      사용자 정보는 useUser 훅으로 관리, 수정 시 useMutation을
                      활용하여 서버에 업데이트 요청
                    </li>
                    <li>
                      수정 후 setState와 refetch를 통해 화면에 변경 사항 반영
                    </li>
                    <li>
                      로딩 상태를 framer-motion으로 처리하여 사용자 경험을 개선
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      모달 기반 UX 설계로 사용자 중심의 흐름을 고민하게 되었고,
                    </li>
                    <li>
                      useMutation과 query hook들을 통해 데이터 갱신 흐름을
                      명확히 제어하는 방법을 익혔습니다.
                    </li>
                    <li>
                      단순한 기능 구현을 넘어서 언제 보여주고 언제 감추는지에
                      대한 사용자 경험 설계의 중요성을 체감했습니다.
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      invalidateQueries 대신 refetch와 setState로 처리해 구조적
                      통일성이 떨어졌다고 느꼈음
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <p className={styles.semiTitle}>예약 현황 페이지</p>
                <p className={styles.rnrIndex}>제작방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      달력(react-calendar)과 아이콘을 조합하여 날짜별 예약
                      상태를 시각적으로 표현
                    </li>
                    <li>
                      다양한 상태(pending, confirmed, declined) 및 시간대
                      필터링을 위한 모달 UI 구성
                    </li>
                    <li>
                      상태 변경은 useMutation으로 처리하고 관련 쿼리를
                      invalidateQueries로 갱신
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      복잡한 상태와 동적 쿼리 흐름 속에서 데이터 분리, 캐싱,
                      갱신 전략의 중요성을 배움
                    </li>
                    <li>상태 관리와 시각화(UI)의 연결 구조 설계 경험</li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      상태 변경 후 달력에 즉각 반영되지 않는 점이 있었고, 로직이
                      복잡하여 유지보수와 수정이 부담되는 구조로 발전한 점이
                      아쉬웠음
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
