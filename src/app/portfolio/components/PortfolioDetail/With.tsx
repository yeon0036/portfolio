"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";

export default function With() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>With</p>
        <div className={styles.thumbnailLink}>
          <Link
            href="https://xd.adobe.com/view/d10f6bd5-2d5e-4457-915b-1ee6b0f4065c-845c/?fullscreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/WITH/withTN.jpg"
              alt="with 대표 썸네일"
              width={600}
              height={350}
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
                <p className={styles.detailTItle}>동아리 둘러보기</p>
                <p className={styles.contentText}>
                  내가 재학중인 대학교에 어떤 동아리가 있는지 둘러볼 수 있어요.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>메세지보내기</p>
                <p className={styles.contentText}>
                  내가 원하는 사람에게 메세지를 보내기가 가능합니다.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>채팅/마이페이지</p>
                <p className={styles.contentText}>
                  내가 속한 동아리의 채팅에 참여할 수 있고, 내 정보 둘러보기를
                  할 수 있어요.
                </p>
              </li>
              <li>
                <p className={styles.detailTItle}>내 동아리</p>
                <p className={styles.contentText}>
                  내가 속한 동아리의 전체 일정, 커뮤니티 등을 확인할 수 있어요.
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
              src="/logo/xd.png"
              alt="xd"
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
                <p className={styles.semiTitle}>동아리 탐색</p>
                <p className={styles.rnrIndex}>제작 방향</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      카테고리, 검색을 통해 관심있는 동아리의 정보에 접근이 가능
                    </li>
                    <li>접근에 depth가 많아지지 않도록 함</li>
                    <li>실제 학교 홈페이지에 분류된 기준을 적용</li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>배운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      실제 어플처럼 동작을 고려하여 flow를 설계하는 것이 사소한
                      부분까지 다 가정해야함을 느낌
                    </li>
                    <li>컴포넌트화를 하는 것이 효율에 중요함을 깨달음</li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>아쉬운 점</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      카테고리 접근시에도 검색이 가능했으면 좋았을 것 같음
                    </li>
                    <li>
                      최신순, 활동순, 가나다순 등 정렬 기능이 없는 것이 아쉬움
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* build */}
        <div className={styles.detailContainer}>
          <p className={styles.semiTitle}>📆 Build</p>
          <div className={styles.detailList}>
            <ul className={styles.rnrList}>
              <li>
                <p className={styles.semiTitle}>제작동기</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      카카오톡, 엑셀, 워드, 인스타 등 하나의 동아리 관리를 위해
                      사용되는 어플이 너무 많음
                    </li>
                    <li>동아리 모집 공고를 한 곳에서 확인하고싶음</li>
                    <li>관심있는 동아리에 대한 정보에 간단히 접근하고 싶음</li>
                    <li>
                      중요한 공지를 모든 채팅방마다 해야하는 것이 번거로움
                    </li>
                  </div>
                </ul>
                <p className={styles.rnrIndex}>경쟁사 리서치</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    <li>
                      소모임
                      <ul>
                        <li>
                          목적:누구나 쉽게 자신의 지역과 관심사에 맞는 모임을
                          찾을 수 있다.
                        </li>
                        <li>타겟층: 오프라인 취미 활동 모임을 찾는 고객</li>
                        <li>강점: 다양한 모임 카테고리</li>
                        <li>약점: 무분별한 초대기능</li>
                      </ul>
                    </li>
                    <li>
                      모두의동아리
                      <ul>
                        <li>
                          목적: 주변에 물어볼 사람이 없는 학생들에게 동아리에
                          관한 유용한 정보들을 제공
                        </li>
                        <li>타겟층: 동아리 활동을 하는 대학생들</li>
                        <li>강점: 학교 이메일 인증, 동아리장 양도 기능</li>
                        <li>약점: IOS 기기 사용 불가</li>
                      </ul>
                    </li>
                    <li>
                      네이버밴드
                      <ul>
                        <li>
                          목적: 가족, 커플, 친구, 학교, 회사, 동호회 등 모든
                          종류의 모임 운영을 쉽게 가능하게 하는 공간 제공
                        </li>
                        <li>타겟층: 모임에 참여하는 모든 사람</li>
                        <li>
                          강점: 밴드 활용법 가이드 제공, 많은 사진 업로드 가능
                        </li>
                        <li>약점: 올드한 인식, 폐쇄적인 성격</li>
                      </ul>
                    </li>
                    <li>etc.</li>
                  </div>
                </ul>
              </li>
              <p className={styles.semiTitle}>⛓️ flowChart & SiteMap</p>
              <ul>
                <div className={styles.rnrDetail}>
                  <Image
                    className={styles.overviewImg}
                    src="/images/WITH/flowChart.jpg"
                    alt="flowchart"
                    width={600}
                    height={350}
                  />
                  <Image
                    className={styles.overviewImg}
                    src="/images/WITH/siteMap.jpg"
                    alt="siteMap"
                    width={600}
                    height={350}
                  />
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.title}>Overview</p>
        <p className={styles.semiTitle}>로그인/회원가입</p>
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview1.jpg"
          alt="with login/signup"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>메인페이지</p>
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview2.jpg"
          alt="with main"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>동아리 상세</p>
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview3.jpg"
          alt="with main"
          width={600}
          height={400}
        />
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview4.jpg"
          alt="with main"
          width={600}
          height={400}
        />
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview5.jpg"
          alt="with main"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>동아리 탐색</p>
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview6.jpg"
          alt="with search"
          width={600}
          height={400}
        />
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview7.jpg"
          alt="with search"
          width={600}
          height={400}
        />
        <p className={styles.semiTitle}>내 정보</p>
        <Image
          className={styles.overviewImg}
          src="/images/WITH/overview8.jpg"
          alt="with mypage"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
