import Author from '../models/Author';

export async function getAuthors(req,res) {
    try {
    const posts = await Author.find();
    return res.json(posts);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

export async function getAuthorById(req,res) {
    try {
    const post = await Author.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Ko tim thay" });
    }
    return res.json(post);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

export async function addAuthor(req,res) {
    try {
    const newPost = await Author.create(req.body);
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function updateAuthor(req,res) {
    try {
    const post = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ error: "Ko tim thay" });
    }
    return res.json(post);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

export async function deleteAuthor(req,res) {
     try {
    const post = await Author.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Ko tim thay" });
    }
    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
}
