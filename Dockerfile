# 1. Node.js 베이스 이미지 설정
FROM node:20

# 2. 작업 디렉토리 설정
WORKDIR /usr/src/app

# 3. 패키지 파일 복사
COPY package.json ./

# 4. Yarn으로 의존성 설치
# RUN corepack enable && corepack prepare yarn@stable --activate && yarn install

# 5. 애플리케이션 코드 복사
COPY . .

# 6. 컨테이너 포트 노출
EXPOSE 3000

# 7. 컨테이너 시작 명령어 설정
CMD ["npm", "start"]
