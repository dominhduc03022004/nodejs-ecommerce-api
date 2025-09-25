let posts = [
  {
    id: 1,
    title: "Sach lam ngheo",
    author: "duc do minh",
    content: "Bien nhung nguoi giau thanh nguoi ngheo",
    page: 333,
    sanxuat: 2025,
  },
  {
    id: 2,
    title: "Sach lam giau",
    author: "duc do minh",
    content: "Bien nhung nguoi ngheo thanh nguoi giau",
    page: 333333,
    sanxuat: 2025,
  },
];

export function getPosts(req, res) {
  res.json(posts);
}

export function getPostById(req, res) {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  res.json(post);
}

export function addPost(req, res) {
  const newPost = { ...req.body };
  posts.push(newPost);
  res.json(newPost);
}

export function updatePost(req, res) {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id == id);
  console.log(index);
  posts[index] = { ...posts[index], ...req.body };
  res.json(posts[index]);
}

export function deletePost(req, res) {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id == id);
  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
}
