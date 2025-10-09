import product from "../model/product.js";

export const getAll = async (req, res) => {
  try {
    const prd = await product.find();
    if (prd.length === 0) {
      return res.status(404).json({
        message: "Khong tim thay san pham",
      });
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong",
      datas: prd,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const prd = await product.findById(req.params.id);
    if (!prd) {
      return res.status(404).json({
        message: "Khong tim thay san pham",
      });
    }
    return res.status(200).json({
      message: "Lay san pham thanh cong",
      datas: prd,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const prd = await product.create(req.body);
    if (!prd) {
      return res.status(404).json({
        message: "Tao san pham khong thanh cong!",
      });
    }
    return res.status(200).json({
      message: "Tao san pham thanh cong",
      datas: prd,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const prd = await product.findByIdAndUpdate(req.params.id, req.body);
    if (!prd) {
      return res.status(404).json({
        message: "Cap nhat san pham khong thanh cong!",
      });
    }
    return res.status(200).json({
      message: "Cap nhat san pham thanh cong",
      datas: prd,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Xoa san pham khong thanh cong",
      });
    }
    return res.status(200).json({
      message: "Xoa thanh cong!"
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
