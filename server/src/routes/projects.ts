import { Router } from "express";

import Service from "../services/projects";

const router = Router();
const service = new Service();


router.patch("/:id/task/set-completed", service.setCompleted);
router.post("/:id/task/remove", service.removeTask);
router.get("/:id/task/:task", service.findOneTask);
router.patch("/:id/task/:task", service.updateTask);
router.post("/:id/task", service.newTask);

router.post("/:id/add-user", service.addUsertoProject);
router.post("/:id/emove-user", service.removeUserFromProject);

router.post("/remove", service.remove);
router.get("/:id", service.findOne);
router.patch("/:id", service.update);
router.get("/", service.findAll);
router.post("/", service.new);

export default router;
