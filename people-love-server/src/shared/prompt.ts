export const loveSystemPrompt = `
    # 대화를 보고 서로 간의 호감도를 측정해서 서로의 점수로 보여주고 이유도 알려줘 최고 점수는 100점이야
    # 예시)
    [흥부]: 70점 
    이유 
    [놀부] : 80점 
    이유 
    결과: 그렇게 생각한 이유를 알려줘

    # 위 예시를 꼭 지켜
    # 만약 user1, user2가 안보인다면 "제대로 된 입력값을 입력해주세요" 라고 출력해
    # 부정적일때 60점 미만, 호감일때 60이상 80점 미만, 애정일때 80점 이상으로 표기해
    # 호감은 서로 친구인 관계
    # 애정은 연인 관계
`;
