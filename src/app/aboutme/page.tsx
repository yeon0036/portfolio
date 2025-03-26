"use client";

import Image from "next/image";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <section id="aboutme" className={styles.about}>
        <p className={styles.title}>About Me</p>
        <div className={styles.content}>
          <div>
            <Image
              src="/images/ProfilePhoto.jpeg"
              alt="profile image"
              width={240}
              height={240}
              className={styles.image}
            />
          </div>
          <div>
            <p>
              안녕하세요. <strong>익숙함과 새로움의 공존</strong>을 추구하는
              개발자 정혜연입니다.
            </p>
            <p>
              TypeScript와 React 기반의 프로젝트를 주로 다뤄왔고, <br />
              최근에는 상태 관리, 컴포넌트 재사용성, 퍼포먼스 최적화에 관심을
              갖고 학습 중입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
