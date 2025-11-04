import Food_Items_Model from "../models/Food_Items.model.js";

export const fetch_food_items = async (req, res) => {
  try {
    const food = await Food_Items_Model.find();
    res.status(200).json(food);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const fetch_food_items_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Food_Items_Model.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
    
  }
};