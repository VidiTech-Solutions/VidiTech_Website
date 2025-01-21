export const createContact = async (req, res) => {
  try {
    const { name, email, interest, budget, message } = req.body;

    const contact = new Contact({
      name,
      email,
      interest,
      budget,
      message,
    });

    const savedContact = await contact.save();


    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting contact form",
      error: error.message,
    });
  }
};
