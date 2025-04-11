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
          <Link href="https://rolling-yeon.vercel.app/">
            <Image
              src="/images/Rolling/RollingTN.png"
              alt="Rolling 대표 썸네일"
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
          src="/images/Rolling/Rolling1.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>롤링페이퍼 상세 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/Rolling/Rolling2.png"
          alt="rolling main page"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>롤링페이퍼 개설 페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/Rolling/Rolling3.png"
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
              src="/logo/javascript.png"
              alt="js"
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
              src="/logo/restAPI.png"
              alt="rest api"
              width={80}
              height={80}
            />
            <Image
              className={styles.logoImg}
              src="/logo/styledComponents.png"
              alt="styled components"
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
          </div>
        </div>

        {/* R & R */}
        <div className={styles.detailContainer}>
          <p className={styles.semiTitle}>📄 R & R</p>
          <div className={styles.detailList}>
            <ul className={styles.rnrList}>
              <li>
                <p className={styles.semiTitle}>Button components</p>
                <p className={styles.rnrIndex}>제작방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>styled-component를 사용하여 제작</li>
                    <li>
                      모양과 크기가 같은 버튼은 하나의 스크립트로 재사용이
                      가능하도록 구성 (RoundButton - checkbutton, homebutton,
                      plusbutton)
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Primary, Secondary, Outlined 버튼등은 하나의 스크립트로
                      관리가 가능했음에도 각각의 파일로 제작해 불필요하게 파일이
                      많아짐
                    </li>
                    <li>
                      기본 사이즈를 지정한 버튼과 그렇지 않은 버튼이 중구난방함
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Primary, Secondary, Outlined 버튼등은 하나의 스크립트로
                      관리가 가능했음에도 각각의 파일로 제작해 불필요하게 파일이
                      많아짐
                    </li>
                    <li>
                      기본 사이즈를 지정한 버튼과 그렇지 않은 버튼이 중구난방함
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <p className={styles.semiTitle}>새 롤링페이퍼 생성 페이지</p>
                <p className={styles.rnrIndex}>제작방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>styled-component를 사용하여 제작</li>
                    <li>
                      모양과 크기가 같은 버튼은 하나의 스크립트로 재사용이
                      가능하도록 구성 (RoundButton - checkbutton, homebutton,
                      plusbutton)
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Primary, Secondary, Outlined 버튼등은 하나의 스크립트로
                      관리가 가능했음에도 각각의 파일로 제작해 불필요하게 파일이
                      많아짐
                    </li>
                    <li>
                      기본 사이즈를 지정한 버튼과 그렇지 않은 버튼이 중구난방함
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      Primary, Secondary, Outlined 버튼등은 하나의 스크립트로
                      관리가 가능했음에도 각각의 파일로 제작해 불필요하게 파일이
                      많아짐
                    </li>
                    <li>
                      기본 사이즈를 지정한 버튼과 그렇지 않은 버튼이 중구난방함
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
