const express = require("express");
const router = express.Router();
const Prompt = require("../Models/prompts");

// GET all prompts
router.get("/", async (req, res) => {
  try {
    const prompts = await Prompt.find().sort({ createdAt: -1 });
    res.render("prompts/index", { 
      prompts, 
      title: "All Prompts",
      page: "prompts"
    });
  } catch (err) {
    console.error("Error fetching prompts:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Failed to fetch prompts",
      error: err
    });
  }
});

// GET form to create new prompt
router.get("/new", (req, res) => {
  res.render("prompts/new", { 
    title: "Create New Prompt",
    page: "new"
  });
});

// POST create new prompt
router.post("/", async (req, res) => {
  try {
    const { from, to, message } = req.body;
    
    // Validate input
    if (!from || !to || !message) {
      return res.status(400).render("error", {
        title: "Validation Error",
        message: "All fields are required",
        error: { message: "Please fill in all fields" }
      });
    }

    const prompt = new Prompt({
      from: from.trim(),
      to: to.trim(),
      message: message.trim()
    });

    await prompt.save();
    console.log("✅ Prompt saved successfully");
    res.redirect("/prompts");
  } catch (err) {
    console.error("❌ Error saving prompt:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Failed to save prompt",
      error: err
    });
  }
});

// GET form to edit prompt
router.get("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const prompt = await Prompt.findById(id);
    
    if (!prompt) {
      return res.status(404).render("error", {
        title: "Not Found",
        message: "Prompt not found",
        error: { message: "The requested prompt does not exist" }
      });
    }
    
    res.render("prompts/edit", { 
      prompt, 
      title: "Edit Prompt",
      page: "edit"
    });
  } catch (err) {
    console.error("❌ Error fetching prompt:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Failed to fetch prompt",
      error: err
    });
  }
});

// PUT update prompt
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { from, to, message } = req.body;

    const updatedPrompt = await Prompt.findByIdAndUpdate(
      id,
      { 
        from: from.trim(), 
        to: to.trim(), 
        message: message.trim() 
      },
      { new: true, runValidators: true }
    );

    if (!updatedPrompt) {
      return res.status(404).render("error", {
        title: "Not Found",
        message: "Prompt not found",
        error: { message: "The requested prompt does not exist" }
      });
    }

    console.log("✅ Prompt updated successfully");
    res.redirect("/prompts");
  } catch (err) {
    console.error("❌ Error updating prompt:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Failed to update prompt",
      error: err
    });
  }
});

// DELETE prompt
router.delete("/:id", async (req, res) => {
  try {
    const deletedPrompt = await Prompt.findByIdAndDelete(req.params.id);
    
    if (!deletedPrompt) {
      return res.status(404).render("error", {
        title: "Not Found",
        message: "Prompt not found",
        error: { message: "The requested prompt does not exist" }
      });
    }
    
    console.log("✅ Prompt deleted successfully");
    res.redirect("/prompts");
  } catch (err) {
    console.error("❌ Error deleting prompt:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Failed to delete prompt",
      error: err
    });
  }
});

module.exports = router;
