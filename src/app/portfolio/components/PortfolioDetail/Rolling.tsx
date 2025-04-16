"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";

export default function Rolling() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>Rolling</p>
        <div className={styles.thumbnailLink}>
          <Link
            href="https://rolling-yeon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Rolling/RollingTN.png"
              alt="Rolling 대표 썸네일"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
              className={styles.thumbnail}
            />
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.title}>Overview</p>
        <p className={styles.semiTitle}>메인 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/Rolling/Rolling1.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>롤링페이퍼 상세 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/Rolling/Rolling2.png"
          alt="rolling detail page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>롤링페이퍼 개설 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/Rolling/Rolling3.png"
          alt="rolling create page"
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
                <p className={styles.detailTItle}>롤링페이퍼 생성</p>
                <p className={styles.contentText}>
                  사용자 본인만의 롤링페이퍼를 개설할 수 있으며, 이를 통해
                  다양한 메세지를 받을 수 있습니다.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>메세지 작성</p>
                <p className={styles.contentText}>
                  원하는 대상의 롤링페이퍼에 자유롭게 메세지를 작성할 수
                  있습니다.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>감정 이모지 표현</p>
                <p className={styles.contentText}>
                  상대방에 대한 감정을 다양한 이모지로 표현해, 메시지에 감성을
                  더합니다.
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
              src="/logo/javascript.png"
              alt="JavaScript"
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
          <p className={styles.semiTitle}>📄 R & R</p>
          <div className={styles.detailList}>
            <ul className={styles.rnrList}>
              <li>
                <p className={styles.semiTitle}>공통 Button 컴포넌트 개발</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      styled-components를 활용해 공통 버튼 컴포넌트를 구현
                    </li>
                    <li>
                      RoundButton(check, home, plus 등)을 하나의 컴포넌트로
                      구성하여 재사용성 확보
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      유지보수성과 확장성을 고려한 컴포넌트 설계의 중요성을 체감
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Primary, Secondary, Outlined 버튼을 하나로 관리할 수
                      있었지만 파일 분리로 관리가 복잡해짐
                    </li>
                    <li>
                      버튼 크기 기준이 일관되지 않아 스타일 관리가 어려웠음
                    </li>
                  </div>
                </ul>
              </li>

              <li>
                <p className={styles.semiTitle}>롤링페이퍼 생성 페이지 구현</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>styled-components를 사용하여 UI 구성</li>
                    <li>
                      필수 입력값 검증과 사용자 경험을 고려한 폼 처리 로직 구현
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      사용자 중심 입력 방식과 상태 관리 흐름에 대한 경험을 쌓음
                    </li>
                    <li>
                      컴포넌트 구조화를 통해 코드 재사용성과 유지보수성을
                      고려하게 됨
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      중복되는 컴포넌트를 분리하지 못해 코드 중복이 발생함
                    </li>
                    <li>
                      폼 유효성 검사 로직이 단순해 예외 처리 대응에 한계가
                      있었음
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.title}>Repository</p>
        <Link href="https://github.com/y5037/Rolling" target="_blank">
          <Image
            className={styles.overviewImg}
            src="/logo/github.png"
            alt="github repository"
            width={150}
            height={150}
          />
        </Link>
      </div>
    </div>
  );
}
