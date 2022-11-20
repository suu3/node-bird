export const initialState = {
  // 미리 서버게발자에게 어떤식으로 줄 지 물어보거나 이렇게 달라고 요청하면 좋다
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 ",
      Images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrZog-KhqOV-dH9quZ4Bv2gd_Z3IgqfQ0zEOY3Fc&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrZog-KhqOV-dH9quZ4Bv2gd_Z3IgqfQ0zEOY3Fc&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrZog-KhqOV-dH9quZ4Bv2gd_Z3IgqfQ0zEOY3Fc&s",
        },
      ],
      Commnets: [
        { User: { nickname: "nero" }, content: "우와~" },
        { User: { nickname: "hero" }, content: "언제 다듣냐?" },
      ],
    },
  ],
  imagePaths: [], //이미지 업로드 시 경로들
  postAdded: false, //업로드 완료되었을 때 true로 변함
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  User: {
    id: 2,
    nickname: "제로초",
  },
  Images: [],
  Contents: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], //앞에다 추가해야 게시글 맨 위에 위치.
        poastAdded: true,
      };

    default:
      return state;
  }
};

export default reducer;
