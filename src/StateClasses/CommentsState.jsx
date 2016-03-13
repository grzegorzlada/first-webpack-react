class CommentsState {
  constructor() {
    this.comment = "Enter your first comment!";
  }

  get commentText() {
    return this.comment;
  }

  set commentText(newText) {
    this.comment = newText;
  }
}

export default CommentsState;
