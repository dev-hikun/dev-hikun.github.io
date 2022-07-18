export interface AllMarkdownResult<T> {
  data: {
    allMarkdownRemark: T;
  };
}

export interface MarkdownRemark<T> {
  data: {
    markdownRemark: T;
  };
}
