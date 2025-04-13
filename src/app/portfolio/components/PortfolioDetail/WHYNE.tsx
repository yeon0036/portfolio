"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";

export default function Whyne() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>WHYNE</p>
        <div className={styles.thumbnailLink}>
          <Link href="https://WHYNE-yeon.vercel.app/">
            <Image
              src="/images/WHYNE/WHYNETN.png"
              alt="WHYNE 대표 썸네일"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.title}>Overview</p>

        <p className={styles.semiTitle}>메인 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/WHYNE/WHYNE1.png"
          alt="WHYNE main page"
          width={600}
          height={400}
        />

        <p className={styles.semiTitle}>검색 기능</p>
        <Image
          className={styles.overviewImg}
          src="/images/WHYNE/WHYNE1-1.png"
          alt="WHYNE main page - search"
          width={600}
          height={400}
        />

        <p className={styles.semiTitle}>와인 상세 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/WHYNE/WHYNE2.png"
          alt="WHYNE detail page"
          width={600}
          height={400}
        />

        <p className={styles.semiTitle}>리뷰 작성</p>
        <Image
          className={styles.overviewImg}
          src="/images/WHYNE/WHYNE2-1.png"
          alt="WHYNE detail page - review"
          width={600}
          height={400}
        />

        <p className={styles.semiTitle}>마이페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/WHYNE/WHYNE3.png"
          alt="WHYNE mypage"
          width={600}
          height={400}
        />

        <p className={styles.semiTitle}>프로필 수정</p>
        <Image
          className={styles.overviewImg}
          src="/images/WHYNE/WHYNE3-1.png"
          alt="WHYNE mypage - edit"
          width={600}
          height={400}
        />
      </div>

      <div className={styles.container}>
        <p className={styles.title}>Details</p>

        {/* Functions */}
        <div className={styles.detailContainer}>
          <ul>
            <p className={styles.semiTitle}>🔎 주요 기능</p>
            <div className={styles.detailList}>
              <li>
                <p className={styles.detailTItle}>메인 페이지</p>
                <p className={styles.contentText}>
                  전체 와인 리스트를 확인할 수 있으며, 이름 또는 조건 검색을
                  통해 원하는 와인을 빠르게 찾을 수 있습니다.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>상세 페이지 및 리뷰</p>
                <p className={styles.contentText}>
                  와인 상세 페이지에서는 다른 유저들이 남긴 리뷰와 평점을 확인할
                  수 있으며, 나만의 리뷰도 작성할 수 있습니다.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>마이페이지</p>
                <p className={styles.contentText}>
                  작성한 리뷰, 등록한 와인 내역을 관리(수정/삭제)할 수 있고, 내
                  프로필 정보도 수정할 수 있습니다.
                </p>
              </li>
            </div>
          </ul>
        </div>

        {/* lang & Tools */}
        <div className={styles.detailContainer}>
          <p className={styles.semiTitle}>🔗 사용 기술 스택</p>
          <div className={styles.detailList}>
            <Image
              className={styles.logoImg}
              src="/logo/typescript.png"
              alt="TypeScript"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/react.png"
              alt="React"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/restAPI.png"
              alt="REST API"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/styledComponents.png"
              alt="Styled Components"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/moduleCSS.png"
              alt="CSS Module"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/vercel.svg"
              alt="Vercel"
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
          </div>
        </div>

        {/* R & R */}
        <div className={styles.detailContainer}>
          <p className={styles.semiTitle}>📄 담당 역할 (R&R)</p>
          <div className={styles.detailList}>
            <ul className={styles.rnrList}>
              <li>
                <p className={styles.semiTitle}>
                  공통 Button 컴포넌트 및 Global CSS
                </p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>CSS Module을 기반으로 공통 Button 컴포넌트 제작</li>
                    <li>
                      Primary/Secondary 유형과 small/regular 사이즈 옵션 설정
                    </li>
                    <li>className을 props로 받아 커스터마이징 가능하게 설계</li>
                    <li>
                      전역 컬러, 마진 등 스타일 가이드 기준을 기본값으로 적용
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      공통 컴포넌트는 초기에 기준을 잘 잡고 작업해야 전체 흐름이
                      매끄럽다는 점을 체감함
                    </li>
                    <li>
                      className을 props로 넘기지 않으면 의도한 기본 스타일이
                      적용되지 않음을 확인
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      버튼 타입별로 파일을 분리하여 코드가 분산되고 유지보수가
                      불편해졌음
                    </li>
                    <li>
                      전역 폰트 적용이 제대로 되지 않아 세팅 재검토가 필요했음
                    </li>
                    <li>
                      디자인 요소가 일부 명확히 공유되지 않아 통일성 있는 스타일
                      적용이 어려웠음
                    </li>
                  </div>
                </ul>
              </li>

              <li>
                <p className={styles.semiTitle}>마이페이지(내 정보) 구현</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>탭 방식 UI로 리뷰/와인/프로필을 구성</li>
                    <li>
                      스크립트가 길어지지 않도록 최대한 컴포넌트 분리하여
                      유지보수 용이하게 구성
                    </li>
                    <li>사용자 전용 리뷰 모달을 재구성해 UX 개선</li>
                    <li>삭제 기능에는 확인 모달을 추가해 실수 방지</li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      정해진 UI에서 더 나은 UX를 고민하며 개선하는 경험을 얻음
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>반응형 디자인을 더 정교하게 다듬을 시간이 부족했음</li>
                    <li>
                      데이터 관리를 상태 기반(useState)로만 하여, React Query
                      등을 활용했으면 더 효율적이었을 것 같음
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
