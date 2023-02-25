import { Router } from "express";

import Service from "../services/projects";

const router = Router();
const service = new Service();

router.post("/:id/task/remove", service.removeTask);
router.patch("/:id/task/set-completed", service.setCompleted);
router.get("/:id/task/:task", service.findOneTask);
router.patch("/:id/task/:task", service.updateTask);
router.post("/:id/task", service.newTask);

router.post("/remove", service.remove);
router.get("/:id", service.findOne);
router.patch("/:id", service.update);
router.get("/", service.findAll);
router.post("/", service.new);

export default router;
