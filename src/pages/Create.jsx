/* eslint-disable react-refresh/only-export-components */
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Form, redirect, useNavigation, json } from "react-router-dom";

function Create() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="POST" name="form">
      <Stack spacing={2} sx={{ maxWidth: "700px" }}>
        <TextField label="Title" fullWidth required name="title" />
        <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows={5}
          fullWidth
          required
          name="details"
        />

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Todo"
          name="category"
          required
        >
          <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
          <FormControlLabel
            value="Shopping"
            control={<Radio />}
            label="Shopping"
          />
          <FormControlLabel value="Work" control={<Radio />} label="Work" />
        </RadioGroup>

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: { sm: 200 },
            padding: { xs: "12px 16px", sm: "6px 16px" },
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Stack>
    </Form>
  );
}

export default Create;

export async function action({ request }) {
  const data = await request.formData();
  const noteData = {
    title: data.get("title"),
    details: data.get("details"),
    category: data.get("category"),
  };

  const res = await fetch("https://notes-3r0s.onrender.com/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });

  if (!res.ok) {
    throw json({ message: "Could not create the note" }, { status: 500 });
  }

  return redirect("/");
}
