/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useDispatch } from "react-redux";
import { update } from "../store/index";
import { useNavigate } from "react-router-dom";

function CardNote({ note }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletCardHandler = async (id) => {
    if (confirm(`Are you sure you want to delete "${note.title}" ?`)) {
      const res = await fetch("https://notes-3r0s.onrender.com/notes/" + id, {
        method: "DELETE",
      });

      navigate("/");
      dispatch(update(""));
    }
  };
  let bColor;
  switch (note.category) {
    case "Todo":
      bColor = "#0092ca";
      break;

    case "Shopping":
      bColor = "#dc2f2f";
      break;
    case "Work":
      bColor = "#a2c11c";
      break;

    default:
      break;
  }
  return (
    <Card
      variant="outlined"
      sx={{ borderColor: bColor, "&:hover": { bgcolor: "action.hover" } }}
    >
      <CardHeader
        sx={{ color: bColor }}
        action={
          <IconButton onClick={() => deletCardHandler(note.id)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardNote;
