# Wortal SDK

<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNjgiPgo8cGF0aCBkPSJNMCAwIEM0LjQxODkzNDYxIDEuMDMzNTA1NTcgNi4wNzQ2MTY2MiAzLjcxOTk1MjgyIDguNTI3MzQzNzUgNy4yODUxNTYyNSBDOS4wMzQ2NzA0MSA3Ljk5MzMzNDk2IDkuNTQxOTk3MDcgOC43MDE1MTM2NyAxMC4wNjQ2OTcyNyA5LjQzMTE1MjM0IEMxMS43NzA2MzE3OSAxMS44NDE3Mzk5NiAxMy40MzQ3ODQwNiAxNC4yNzY4NzY4OSAxNS4wODk4NDM3NSAxNi43MjI2NTYyNSBDMTUuNjg1MzkwNjIgMTcuNjAwNjY4OTUgMTYuMjgwOTM3NSAxOC40Nzg2ODE2NCAxNi44OTQ1MzEyNSAxOS4zODMzMDA3OCBDMjYuMTc4MDkwMTUgMzMuMTY5MDkxOTcgMzQuODQ0MjYwOTUgNDcuMjk1MzIwMTEgNDMuMDg5ODQzNzUgNjEuNzIyNjU2MjUgQzQzLjY5NzYzNjcyIDYyLjc3MzI0MjE5IDQ0LjMwNTQyOTY5IDYzLjgyMzgyODEyIDQ0LjkzMTY0MDYyIDY0LjkwNjI1IEM0Ni43OTc4ODE5MyA2OC4xNDU2OTA1MiA0OC42MzUwOTA3OSA3MS4zOTk5OTEzIDUwLjQ2NDg0Mzc1IDc0LjY2MDE1NjI1IEM1MS4wNDMxNDk0MSA3NS42NjEwMzI3MSA1MS42MjE0NTUwOCA3Ni42NjE5MDkxOCA1Mi4yMTcyODUxNiA3Ny42OTMxMTUyMyBDNTQuNTQ4NzQyMTYgODEuOTE3ODQ3NiA1Ni4wODA3Mzg4NiA4NC43MTgwODMyOSA1Ni4xMjUgODkuNjAxNTYyNSBDNTIuNjQyOTgxNzUgMTAwLjEwMDE3NjAyIDQ0LjgzOTc4NzYzIDEwNi4yNDM0MDE0NyAzNS4zMDg1OTM3NSAxMTEuMTU2MjUgQzI1LjMxNTkxNzQ4IDExNS42ODI1MDI1NiAxNC4wOTc0MTM2NyAxMTguMzk2NTg5MSAzLjA4OTg0Mzc1IDExNy43MjI2NTYyNSBDMi4zMTQ1NTg5NiAxMTQuMjk2OTE2ODggMS45NzA2NTU5NyAxMTEuMTUwMjYzOCAxLjk5MjE4NzUgMTA3LjY0MDYyNSBDMS45OTU0MTAxNiAxMDYuNzA5Mjc3MzQgMS45OTg2MzI4MSAxMDUuNzc3OTI5NjkgMi4wMDE5NTMxMiAxMDQuODE4MzU5MzggQzIuMDE0NTIxNDggMTAzLjM3ODc5ODgzIDIuMDE0NTIxNDggMTAzLjM3ODc5ODgzIDIuMDI3MzQzNzUgMTAxLjkxMDE1NjI1IEMyLjAzMTg1NTQ3IDEwMC45MzExMTMyOCAyLjAzNjM2NzE5IDk5Ljk1MjA3MDMxIDIuMDQxMDE1NjIgOTguOTQzMzU5MzggQzIuMDUyNzU2OTEgOTYuNTM2Mzk1MTQgMi4wNjkxNzk1NiA5NC4xMjk1NTc2OCAyLjA4OTg0Mzc1IDkxLjcyMjY1NjI1IEMyLjc0NDI4NDY3IDkxLjU0NTI0OTAyIDMuMzk4NzI1NTkgOTEuMzY3ODQxOCA0LjA3Mjk5ODA1IDkxLjE4NTA1ODU5IEMxMy42NjUyMTI3MiA4OC40Njg2MzIzNiAyMS4yNTEzMDg3OCA4NC4wMDIzODcwMiAyOC4wODk4NDM3NSA3Ni43MjI2NTYyNSBDMjguNzQ5ODQzNzUgNzYuNzIyNjU2MjUgMjkuNDA5ODQzNzUgNzYuNzIyNjU2MjUgMzAuMDg5ODQzNzUgNzYuNzIyNjU2MjUgQzIzLjYxMjg4MDA2IDYyLjY1MTI5NzQzIDE1LjQ1MzgxMDMxIDQ5LjczNjk3ODY4IDcuMDg5ODQzNzUgMzYuNzIyNjU2MjUgQzYuNjE4NTMwMjcgMzUuOTgyMDg5ODQgNi4xNDcyMTY4IDM1LjI0MTUyMzQ0IDUuNjYxNjIxMDkgMzQuNDc4NTE1NjIgQzIuNTQ0MzEwMzEgMjkuNDgxNTcwNzYgMi41NDQzMTAzMSAyOS40ODE1NzA3NiAtMC45MTAxNTYyNSAyNC43MjI2NTYyNSBDLTEuNTcwMTU2MjUgMjQuNzIyNjU2MjUgLTIuMjMwMTU2MjUgMjQuNzIyNjU2MjUgLTIuOTEwMTU2MjUgMjQuNzIyNjU2MjUgQy00LjQ2NzY0MTYyIDI2LjY2NTU2Mzk2IC01Ljg1MDkzNzkgMjguNTg4Njc1MjcgLTcuMjIyNjU2MjUgMzAuNjYwMTU2MjUgQy03Ljg2NjY2MzgyIDMxLjYyOTAwNzU3IC03Ljg2NjY2MzgyIDMxLjYyOTAwNzU3IC04LjUyMzY4MTY0IDMyLjYxNzQzMTY0IEMtMTIuNjk2NDMyMDIgMzkuMDgzODI3NzEgLTE2LjI5NDIwMTI2IDQ1LjgzODY2MjMzIC0xOS44NDc2NTYyNSA1Mi42NjAxNTYyNSBDLTIwLjY4MDY3MjYxIDU0LjI1ODE1MDYzIC0yMC42ODA2NzI2MSA1NC4yNTgxNTA2MyAtMjEuNTMwNTE3NTggNTUuODg4NDI3NzMgQy0yNi44MjYwMjgxMyA2NS4yMzc5MjYgLTI2LjgyNjAyODEzIDY1LjIzNzkyNiAtMjguODA4NTkzNzUgNzUuNTA3ODEyNSBDLTI1LjY4MzQzMDIyIDgzLjIxMjAxOTk4IC0xNS44Nzk1Mzk3OCA4Ny4yMjUxNTMxMiAtOC45MTAxNTYyNSA5MC43MjI2NTYyNSBDLTguODUxODgwNjcgOTQuMjg1MDg3MDUgLTguODE2NDY3NCA5Ny44NDczOTQ0NCAtOC43ODUxNTYyNSAxMDEuNDEwMTU2MjUgQy04Ljc2ODM5ODQ0IDEwMi40MTc1NTg1OSAtOC43NTE2NDA2MiAxMDMuNDI0OTYwOTQgLTguNzM0Mzc1IDEwNC40NjI4OTA2MiBDLTguNzI0NzA3MDMgMTA1LjkyNzU4Nzg5IC04LjcyNDcwNzAzIDEwNS45Mjc1ODc4OSAtOC43MTQ4NDM3NSAxMDcuNDIxODc1IEMtOC42OTkxMzMzIDEwOC43NjUxMTg0MSAtOC42OTkxMzMzIDEwOC43NjUxMTg0MSAtOC42ODMxMDU0NyAxMTAuMTM1NDk4MDUgQy04LjkzMzEyMTY5IDExMi45ODQzMzg4MiAtOS43Mjk5OTExMyAxMTUuMTMxNjAxNjggLTEwLjkxMDE1NjI1IDExNy43MjI2NTYyNSBDLTIzLjg4NTc4ODg2IDExNC44NjE0OTE2MSAtMzMuNjIyNzQ2NjcgMTA5LjI0MTgzNzE5IC00Mi45MTAxNTYyNSA5OS43MjI2NTYyNSBDLTQ0LjA5MTU4MjAzIDk4LjU3MDIzNDM3IC00NC4wOTE1ODIwMyA5OC41NzAyMzQzNyAtNDUuMjk2ODc1IDk3LjM5NDUzMTI1IEMtNDYuOTEwMTU2MjUgOTQuNzIyNjU2MjUgLTQ2LjkxMDE1NjI1IDk0LjcyMjY1NjI1IC00Ni41NTg1OTM3NSA5MS40Mjk2ODc1IEMtNDYuMTYzMjE0MiA5MC4xMjIzNTM4MyAtNDUuNzM1ODgyOTggODguODI0NDU1MTcgLTQ1LjI4NTE1NjI1IDg3LjUzNTE1NjI1IEMtNDUuMDQ5MzM4MzggODYuODA4MTI1IC00NC44MTM1MjA1MSA4Ni4wODEwOTM3NSAtNDQuNTcwNTU2NjQgODUuMzMyMDMxMjUgQy00My43MjEzNDcxNCA4Mi43ODA5ODgwNSAtNDIuODIxNDA4MjkgODAuMjUyMTg5ODEgLTQxLjkxMDE1NjI1IDc3LjcyMjY1NjI1IEMtNDEuNTY2MTM3NyA3Ni43NTUwNTM3MSAtNDEuMjIyMTE5MTQgNzUuNzg3NDUxMTcgLTQwLjg2NzY3NTc4IDc0Ljc5MDUyNzM0IEMtMzIuMTA3ODMzODIgNTAuNDIyNTIgLTIxLjM5NTcwOTYgMjcuMjM4NTg4MTMgLTYuOTEwMTU2MjUgNS43MjI2NTYyNSBDLTYuMjUwMTU2MjUgNC43MDY4NzUgLTUuNTkwMTU2MjUgMy42OTEwOTM3NSAtNC45MTAxNTYyNSAyLjY0NDUzMTI1IEMtMi45MTAxNTYyNSAwLjcyMjY1NjI1IC0yLjkxMDE1NjI1IDAuNzIyNjU2MjUgMCAwIFogIiBmaWxsPSIjMUMxRDIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ni45MTAxNTYyNSwtMC43MjI2NTYyNSkiLz4KPHBhdGggZD0iTTAgMCBDNS4yOCAwIDEwLjU2IDAgMTYgMCBDMTYuMzMgMS45OCAxNi42NiAzLjk2IDE3IDYgQzE3Ljk5IDQuMDIgMTguOTggMi4wNCAyMCAwIEMyMy4zIDAgMjYuNiAwIDMwIDAgQzMwLjIyNzg2NDU4IDIuMDUwNzgxMjUgMzAuNDU1NzI5MTcgNC4xMDE1NjI1IDMwLjY4MzU5Mzc1IDYuMTUyMzQzNzUgQzMwLjgxODg2NjE0IDguMDExNDAyMjkgMzAuODE4ODY2MTQgOC4wMTE0MDIyOSAzMiA5IEMzMi45OSA2LjAzIDMzLjk4IDMuMDYgMzUgMCBDNjkuMzMzMzMzMzMgMCAxMDMuNjY2NjY2NjcgMCAxMzggMCBDMTM3LjY3IDIuMzEgMTM3LjM0IDQuNjIgMTM3IDcgQzEzNC42OSA3IDEzMi4zOCA3IDEzMCA3IEMxMjkuOTI2NTIzNDQgOC4zMDMyNDIxOSAxMjkuOTI2NTIzNDQgOC4zMDMyNDIxOSAxMjkuODUxNTYyNSA5LjYzMjgxMjUgQzEyOS43NzY3OTY4OCAxMC43ODUyMzQzNyAxMjkuNzAyMDMxMjUgMTEuOTM3NjU2MjUgMTI5LjYyNSAxMy4xMjUgQzEyOS41NTUzOTA2MyAxNC4yNjE5NTMxMiAxMjkuNDg1NzgxMjUgMTUuMzk4OTA2MjUgMTI5LjQxNDA2MjUgMTYuNTcwMzEyNSBDMTI4Ljk4NzkwMjI1IDIwLjEwMDIwNTkgMTI4LjYxMzE1MTkxIDIyLjgxOTkxODI5IDEyNyAyNiBDMTI0LjA2NjQwNjI1IDI3LjI0MjE4NzUgMTI0LjA2NjQwNjI1IDI3LjI0MjE4NzUgMTIwLjU2MjUgMjcuODc1IEMxMTkuNDA4Nzg5MDYgMjguMDk5Mjk2ODcgMTE4LjI1NTA3ODEyIDI4LjMyMzU5Mzc1IDExNy4wNjY0MDYyNSAyOC41NTQ2ODc1IEMxMTQgMjkgMTE0IDI5IDExMSAyOSBDMTExLjk5IDIxLjc0IDExMi45OCAxNC40OCAxMTQgNyBDMTEyLjM1IDcgMTEwLjcgNyAxMDkgNyBDMTA4LjYyODc1IDguMTQ0Njg3NSAxMDguNjI4NzUgOC4xNDQ2ODc1IDEwOC4yNSA5LjMxMjUgQzEwNi44OTAwNDQ0MiAxMi4yMzY0MDQ1IDEwNS42ODQxNDE3NCAxMy4zMDAwNDM1NiAxMDMgMTUgQzEwMy4yODg3NSAxNS41NDI2OTUzMSAxMDMuNTc3NSAxNi4wODUzOTA2MyAxMDMuODc1IDE2LjY0NDUzMTI1IEMxMDQuMjQ2MjUgMTcuMzU5OTYwOTQgMTA0LjYxNzUgMTguMDc1MzkwNjMgMTA1IDE4LjgxMjUgQzEwNS4zNzEyNSAxOS41MjAxOTUzMSAxMDUuNzQyNSAyMC4yMjc4OTA2MiAxMDYuMTI1IDIwLjk1NzAzMTI1IEMxMDcgMjMgMTA3IDIzIDEwNyAyNiBDMTAxLjkyNTIzMjA2IDI3LjI2MzA1MzM1IDk3LjI3MjAzNjQ2IDI4LjI3MDM2MDg0IDkyIDI4IEM5MS4wMSAyNS4zNiA5MC4wMiAyMi43MiA4OSAyMCBDODguODE4MjQyMTkgMjAuOTM5NzI2NTYgODguODE4MjQyMTkgMjAuOTM5NzI2NTYgODguNjMyODEyNSAyMS44OTg0Mzc1IEM4OC40NjUyMzQzNyAyMi43MTU3MDMxMyA4OC4yOTc2NTYyNSAyMy41MzI5Njg3NSA4OC4xMjUgMjQuMzc1IEM4Ny45NjI1NzgxMiAyNS4xODcxMDkzOCA4Ny44MDAxNTYyNSAyNS45OTkyMTg3NSA4Ny42MzI4MTI1IDI2LjgzNTkzNzUgQzg3IDI5IDg3IDI5IDg1IDMxIEM4MC4wODM5MzM3NyAzMi41OTI4MDU0NiA3NS4xNjM0MjQxMyAzMy4yNjQ3OTA5OCA3MCAzMyBDNzAgMzAuMzYgNzAgMjcuNzIgNzAgMjUgQzY4LjUxNSAyNS40OTUgNjguNTE1IDI1LjQ5NSA2NyAyNiBDNjIuODU4NDIwOTEgMjYuMjU5NDYyOTUgNTguNzExMzM3NjYgMjYuMjMxMzg0OTEgNTQuNTYyNSAyNi4yNSBDNTMuNDE3MTY3OTcgMjYuMjcwNjI1IDUyLjI3MTgzNTk0IDI2LjI5MTI1IDUxLjA5MTc5Njg4IDI2LjMxMjUgQzQ5Ljk5MDI5Mjk3IDI2LjMxNzY1NjI1IDQ4Ljg4ODc4OTA2IDI2LjMyMjgxMjUgNDcuNzUzOTA2MjUgMjYuMzI4MTI1IEM0Ni4yNDI5MjM1OCAyNi4zNDIxNDM1NSA0Ni4yNDI5MjM1OCAyNi4zNDIxNDM1NSA0NC43MDE0MTYwMiAyNi4zNTY0NDUzMSBDNDEuNTg4NDgzODEgMjUuOTQ1NzAxNDMgNDAuMjEzMzE1MDMgMjUuMjAxODk0NDIgMzggMjMgQzM3Ljc1IDIwLjMxMjUgMzcuNzUgMjAuMzEyNSAzOCAxOCBDMzcuNTYzMDQyMDMgMjIuNjMxNzU0NSAzNy41NjMwNDIwMyAyMi42MzE3NTQ1IDM2IDI1IEMzMS4xNTg0Mzg5OSAyNy4yNDY0ODQzMSAyNi4zMDMzMTgxIDI4IDIxIDI4IEMyMC42NyAyNS4wMyAyMC4zNCAyMi4wNiAyMCAxOSBDMTcuMjI1MjA1NjQgMjEuNzc0Nzk0MzYgMTYuNDI0NTMxMjMgMjMuMTMwNDU0NTQgMTQuOTM3NSAyNi41NjI1IEMxMy40MTgyOTY2IDI5LjM5ODM0NjM0IDEyLjYzNDU2MTU5IDMwLjcxOTg1OTEgOS42NjQwNjI1IDMyLjAzMTI1IEM1LjE0MTIxNzc4IDMyLjk1NDgzMzkxIDAuNjEzODUyOSAzMy4yNDI4MzQzNiAtNCAzMyBDLTQuMjQ5MzM4NjEgMjUuNTg5OTY4MjkgLTMuMzAwMDAwNDkgMTguNzIzNjUxNCAtMiAxMS40Mzc1IEMtMS44MDkyMTg3NSAxMC4zMzM0MTc5NyAtMS42MTg0Mzc1IDkuMjI5MzM1OTQgLTEuNDIxODc1IDguMDkxNzk2ODggQy0wLjk1NDYxMzczIDUuMzkzMzYzMDIgLTAuNDc4MjQwODIgMi42OTY1MDk2MSAwIDAgWiBNNTYgNSBDNTUuMzQgOS45NSA1NC42OCAxNC45IDU0IDIwIEM1NC45OSAyMCA1NS45OCAyMCA1NyAyMCBDNTcuNjYgMTUuMDUgNTguMzIgMTAuMSA1OSA1IEM1OC4wMSA1IDU3LjAyIDUgNTYgNSBaIE05MCA1IEM4OS42NyA2Ljk4IDg5LjM0IDguOTYgODkgMTEgQzg5Ljk5IDExIDkwLjk4IDExIDkyIDExIEM5Mi4zMyA5LjAyIDkyLjY2IDcuMDQgOTMgNSBDOTIuMDEgNSA5MS4wMiA1IDkwIDUgWiBNMTUgOCBDMTYgMTAgMTYgMTAgMTYgMTAgWiBNMzkgMTEgQzQwIDEzIDQwIDEzIDQwIDEzIFogIiBmaWxsPSIjMUMxRDIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LDEzNSkiLz4KPHBhdGggZD0iTTAgMCBDMC42MzQ3NTczIDEuNTM4MDY1NzggMS4yMDE0MjM1NiAzLjEwNDczNTg1IDEuNzI2NTYyNSA0LjY4MzU5Mzc1IEMyLjAzNTkzNzUgNS42MTEwNzQyMiAyLjM0NTMxMjUgNi41Mzg1NTQ2OSAyLjY2NDA2MjUgNy40OTQxNDA2MiBDMi45ODExNzE4OCA4LjQ2NTQ0OTIyIDMuMjk4MjgxMjUgOS40MzY3NTc4MSAzLjYyNSAxMC40Mzc1IEM0LjExMjI2NTYyIDExLjg4ODY2MjExIDQuMTEyMjY1NjIgMTEuODg4NjYyMTEgNC42MDkzNzUgMTMuMzY5MTQwNjIgQzcgMjAuNjA2MzA1OCA3IDIwLjYwNjMwNTggNyAyNCBDNy42NiAyNCA4LjMyIDI0IDkgMjQgQzkuMDQ4OTg0MzggMjMuMTY1OTc2NTYgOS4wOTc5Njg3NSAyMi4zMzE5NTMxMiA5LjE0ODQzNzUgMjEuNDcyNjU2MjUgQzkuNTkzMTcyNjggMTQuNzc4NjI0OTkgMTAuMzQ2ODIwNCA4LjUwMjUwNjQxIDEyIDIgQzE0LjA2MDgxMzYxIDEuNDkzMDk0MTYgMTYuMTIzNzM1MjYgMC45OTQ3NTM4MSAxOC4xODc1IDAuNSBDMTkuMzM2MDU0NjkgMC4yMjE1NjI1IDIwLjQ4NDYwOTM3IC0wLjA1Njg3NSAyMS42Njc5Njg3NSAtMC4zNDM3NSBDMjUgLTEgMjUgLTEgMzAgLTEgQzI5LjAxIDUuOTMgMjguMDIgMTIuODYgMjcgMjAgQzI5LjMxIDIwLjMzIDMxLjYyIDIwLjY2IDM0IDIxIEMzNC4wNDI1NDM1NiAyMi45OTk1NDc0NiAzNC4wNDA4MDc4MyAyNS4wMDA0MTYzNiAzNCAyNyBDMzIuNDQzMzQxMiAyOC41NTY2NTg4IDMwLjk1MTQ4MjkxIDI4LjEyNzIxODI5IDI4Ljc4NzM1MzUyIDI4LjEyOTM5NDUzIEMyNy44OTI5NTA1OSAyOC4xMzI1NDY2OSAyNi45OTg1NDc2NyAyOC4xMzU2OTg4NSAyNi4wNzcwNDE2MyAyOC4xMzg5NDY1MyBDMjUuMTA0MTU2OTUgMjguMTM2OTIyMyAyNC4xMzEyNzIyOCAyOC4xMzQ4OTgwNyAyMy4xMjg5MDYyNSAyOC4xMzI4MTI1IEMyMi4xMzYyNDI1MiAyOC4xMzM3NjkyMyAyMS4xNDM1Nzg4IDI4LjEzNDcyNTk1IDIwLjEyMDgzNDM1IDI4LjEzNTcxMTY3IEMxOC4wMTY2NzIxMyAyOC4xMzYzOTM2NiAxNS45MTI1MDc4MiAyOC4xMzQ1MzgwNiAxMy44MDgzNDk2MSAyOC4xMzAzNzEwOSBDMTAuNTc5ODY3NCAyOC4xMjUwMjg3NCA3LjM1MTUyNDY5IDI4LjEzMDMxMjU1IDQuMTIzMDQ2ODggMjguMTM2NzE4NzUgQzIuMDgzMzMzMDIgMjguMTM2MDU3ODYgMC4wNDM2MTkyNiAyOC4xMzQ3NzY0OCAtMS45OTYwOTM3NSAyOC4xMzI4MTI1IEMtMi45NjY5NTQxOSAyOC4xMzQ4MzY3MyAtMy45Mzc4MTQ2NCAyOC4xMzY4NjA5NiAtNC45MzgwOTUwOSAyOC4xMzg5NDY1MyBDLTUuODM1NjUwMTggMjguMTM1Nzk0MzcgLTYuNzMzMjA1MjYgMjguMTMyNjQyMjEgLTcuNjU3OTU4OTggMjguMTI5Mzk0NTMgQy04Ljg0NTkwMzA5IDI4LjEyODIwMTE0IC04Ljg0NTkwMzA5IDI4LjEyODIwMTE0IC0xMC4wNTc4NDYwNyAyOC4xMjY5ODM2NCBDLTEyIDI4IC0xMiAyOCAtMTQgMjcgQy0xNCAyNi4wMSAtMTQgMjUuMDIgLTE0IDI0IEMtMTcuNjMgMjQgLTIxLjI2IDI0IC0yNSAyNCBDLTI1LjY2IDI1LjMyIC0yNi4zMiAyNi42NCAtMjcgMjggQy0yOC42NSAyOCAtMzAuMyAyOCAtMzIgMjggQy0zMC40OTc0ODc1NyAxOC42Mjg4NzQ4NSAtMjQuMzY4MzMzOTkgOC45MDcwMjYzMiAtMTggMiBDLTEzLjMyMjU4NjQ4IC0xLjA0MTA2MjU4IC00LjM4NjU4NDg2IC00LjM4NjU4NDg2IDAgMCBaIE0tMTkgMTQgQy0xOS42NiAxNS42NSAtMjAuMzIgMTcuMyAtMjEgMTkgQy0xOS4zNSAxOSAtMTcuNyAxOSAtMTYgMTkgQy0xNi42NiAxNy4zNSAtMTcuMzIgMTUuNyAtMTggMTQgQy0xOC4zMyAxNCAtMTguNjYgMTQgLTE5IDE0IFogIiBmaWxsPSIjMUMxRDIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjYsMTMzKSIvPgo8cGF0aCBkPSJNMCAwIEMxLjMyIDAuMzMgMi42NCAwLjY2IDQgMSBDNC43OTk1MzEzOCA0LjI4Njk2MjMzIDUuMDk2NTg5MzYgNS43MTAyMzE5MiA0IDkgQzMuMDEgOS4zMyAyLjAyIDkuNjYgMSAxMCBDMC4zNCA5LjY3IC0wLjMyIDkuMzQgLTEgOSBDLTEuOTQ5MzQyMDIgNi4wNzI4NjIxMiAtMi4yMzE3NjQ3MyA0LjU3MTY4NjMyIC0xLjA2MjUgMS42ODc1IEMtMC43MTE4NzUgMS4xMzA2MjUgLTAuMzYxMjUgMC41NzM3NSAwIDAgWiAiIGZpbGw9IiMxQzFEMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3LDU5KSIvPgo8cGF0aCBkPSJNMCAwIEMxLjMyIDAuNjYgMi42NCAxLjMyIDQgMiBDNCAzLjk4IDQgNS45NiA0IDggQzIuMDIgOC45OSAyLjAyIDguOTkgMCAxMCBDLTIuMTQ5MTU3ODUgNi43NzYyNjMyMyAtMi4zODI4NjgwMyA1LjczMjk2MzI2IC0yIDIgQy0xLjM0IDEuMzQgLTAuNjggMC42OCAwIDAgWiAiIGZpbGw9IiMxQzFEMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMiw1OSkiLz4KPC9zdmc+Cg==" class="extension-icon"></img>
Wortal SDK for GDevelop 5.

**Authors and contributors** to this experimental extension: (not specified).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Allow developer to use one SDK to deliver their games everywhere. To learn more about Wortal please visit our to [Official site](https://wortal.ai) and our [SDK Documentation](https://docs.games-api.ai/).

[Read more...](https://docs.games-api.ai)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Can subscribe to bot asynchronously**  
Checks if the current user can subscribe to the game's bot.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Boolean variable to set the result

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::CanSubscribeBotAsync`.

**Cancel all notifications async**  
Cancel all scheduled notifications.

??? quote "See parameters & details"

    - Parameter 1 (string): Notification label

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::CancelAllNotificationsAsync`.

**Cancel notification async**  
Cancel a notification async.

??? quote "See parameters & details"

    - Parameter 1 (string): Notification ID

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::CancelNotificationAsync`.

**Choose context async**  
Opens a context selection dialog for the player. If the player selects an available context, the client will attempt to switch into that context, and resolve if successful. Otherwise, if the player exits the menu or the client fails to switch into the new context, this function will reject.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ChooseContextAsync`.

**Consume purchase async**  
Consumes a specific purchase belonging to the current player.

??? quote "See parameters & details"

    - Parameter 1 (string): Token of the Purchased product

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ConsumePurchaseAsync`.

**Create context async**  
Attempts to create a context between the current player and a specified player or a list of players.

??? quote "See parameters & details"

    - Parameter 1 (string): ID of players separated by comma

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::CreateContextAsync`.

**Create a tournament async**  
Opens the tournament creation dialog if the player is not currently in a tournament session.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Tournament creation payload structure variable
    - Parameter 2 (🗄️ Any variable): Tournament structure variable callback

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::CreateTournamentAsync`.

**Flush data asynchronously**  
Flushes any unsaved data to the platform's storage. This function is expensive, and should primarily be used for critical changes where persistence needs to be immediate and known by the game. Non-critical changes should rely on the platform to persist them in the background.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::FlushDataAsync`.

**Start the gameplay session**  
Tracks the start of a gameplay session.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GamePlayStart`.

**Stop the gameplay session**  
Tracks the end of a gameplay session.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GamePlayStop`.

**Get ASID asynchronously**  
A unique identifier for the player. This is the standard Facebook Application-Scoped ID which is used for all Graph API calls. If your game shares an AppID with a native game this is the ID you will see in the native game too.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): String variable to save ASID

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetASIDAsync`.

**Get achievements async**  
Gets a player's achievements. This method returns all achievements, regardless of whether they are unlocked or not.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array of Achivement structure variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetAchievementsAsync`.

**Get all tournaments async**  
Returns a list of eligible tournaments that can be surfaced in-game.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array of tournament structure variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetAllTournamentsAsync`.

**Get catalog async**  
Gets the catalog of available products the player can purchase.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array of product structure variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetCatalogAsync`.

**Get connected players async**  
Gets ConnectedPlayers containing information about active players that are connected to the current player.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Payload variable with structure type
    - Parameter 2 (🗄️ Any variable): Array of connected player

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetConnectedPlayersAsync`.

**Get connected players entries**  
Retrieves the leaderboard score entries of the current player's connected players (including the current player), ordered by local rank within the set of connected players.

??? quote "See parameters & details"

    - Parameter 1 (string): The name of the leaderboard
    - Parameter 2 (🔢 Number): The number of entries to attempt to fetch from the leaderboard
    - Parameter 3 (🔢 Number): The offset from the set of ordered connected player score entries to fetch from
    - Parameter 4 (🗄️ Any variable): Array of Leaderboard structure result variable callback

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetConnectedPlayersEntriesAsync`.

**Get current player leaderboard entry async**  
Retrieves the leaderboard's entry for the current player, or null if the player has not set one yet.

??? quote "See parameters & details"

    - Parameter 1 (string): The name of the leaderboard
    - Parameter 2 (🗄️ Any variable): Leaderboard entry structure variable callback

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetCurrentPlayerEntryAsync`.

**Get current tournament async**  
Fetch the tournament out of the current context the user is playing.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Tournament structure variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetCurrentTournamentAsync`.

**Get player data async**  
Retrieve data from the designated cloud storage of the current player.

??? quote "See parameters & details"

    - Parameter 1 (string): String of data keys (separated them with comma for multiple data points)
    - Parameter 2 (🗄️ Any variable): Variable to save data received from server

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetDataAsync`.

**Get entry point asynchronously**  
Get entry point that the game was launched from asynchronously.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): String variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetEntryPointAsync`.

**Get entry point data**  
Get any data object associated with the entry point that the game was launched from.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Structure variable callback to set the result

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetEntryPointData`.

**Get leaderboard async**  
Fetch a specific leaderboard belonging to this game.

??? quote "See parameters & details"

    - Parameter 1 (string): The name of the leaderboard. Each leaderboard for a game must have its own distinct name
    - Parameter 2 (🗄️ Any variable): Leaderboard structure variable callback

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetLeaderboardAsync`.

**Get leaderboard entries**  
Retrieves a set of leaderboard entries, ordered by score ranking in the leaderboard.

??? quote "See parameters & details"

    - Parameter 1 (string): The name of the leaderboard
    - Parameter 2 (🔢 Number): The number of entries to attempt to fetch from the leaderboard
    - Parameter 3 (🔢 Number): The offset from the set of ordered connected player score entries to fetch from
    - Parameter 4 (🗄️ Any variable): Array of Leaderboard structure result variable callback

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetLeaderboardEntriesAsync`.

**Get leaderboard entry count async**  
Gets the total number of entries in the leaderboard.

??? quote "See parameters & details"

    - Parameter 1 (string): The name of the leaderboard
    - Parameter 2 (🗄️ Any variable): Entry count variable callback

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetLeaderboardEntryCountAsync`.

**Get notification history async**  
Gets the history of scheduled notifications for the past 30 days.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable callback to save the notification

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetNotificationHistoryAsync`.

**Get players async**  
Gets an array of ConnectedPlayer objects containing information about active players in the current context (people who played the game in the current context in the last 90 days).

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable to save the result of connected players of current context

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetPlayersAsync`.

**Get purchased products async**  
Gets purchased products.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array of purchased products structure variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetPurchaseAsync`.

**Get signed ASID async**  
A unique identifier for the player. This is the standard Facebook Application-Scoped ID which is used for all Graph API calls. If your game shares an AppID with a native game this is the ID you will see in the native game too.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Signed ASID Structure variable callback

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetSignedASIDAsync`.

**Get stats async**  
Gets a player's stats.

??? quote "See parameters & details"

    - Parameter 1 (string): Level
    - Parameter 2 (🔤 String): Period of stat (one of: "alltime", "daily", "monthly", "weekly")
    - Parameter 3 (🗄️ Any variable): Variable to save the result (Array)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetStatsAsync`.

**Get traffic source**  
Gets the traffic source info for the game. This is useful for tracking where players are coming from.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Structure variable to set traffic source

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::GetTrafficSource`.

**Invite Async**  
This invokes a dialog to let the user invite one or more people to the game.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Invite players payload

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::InviteAsync`.

**Join tournament async**  
Request a switch into a specific tournament context.

??? quote "See parameters & details"

    - Parameter 1 (string): Tournament ID

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::JoinTournamentAsync`.

**Log game choice**  
Logs a choice the player made in the game. This can be a powerful tool for balancing the game and understanding what content the players are interacting with the most.

??? quote "See parameters & details"

    - Parameter 1 (string): Decision
    - Parameter 2 (string): Choice

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogGameChoice`.

**Log level end**  
Logs the end of a level. To ensure the level timer is recorded the level name must match the name passed into the previous logLevelStart call. If it does not match then the timer will be logged at 0.

??? quote "See parameters & details"

    - Parameter 1 (string): Level
    - Parameter 2 (string): Score
    - Parameter 3 (🔤 String): Flag if level is completed or not (one of: "completed", "not completed")

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogLevelEnd`.

**Log level start**  
Logs the start of a level.

??? quote "See parameters & details"

    - Parameter 1 (string): Level

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogLevelStart`.

**Log level up**  
Logs the player achieving a new level.

??? quote "See parameters & details"

    - Parameter 1 (string): Level

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogLevelUp`.

**Log score**  
Logs the player's score.

??? quote "See parameters & details"

    - Parameter 1 (string): Score

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogScore`.

**Log social invite**  
Logs the player's social invite.

??? quote "See parameters & details"

    - Parameter 1 (string): Placement of the invite

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogSocialInvite`.

**Log social share**  
Logs the player's social share.

??? quote "See parameters & details"

    - Parameter 1 (string): Placement of the share

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogSocialShare`.

**Log tutorial end**  
Logs the end of a tutorial. To ensure the level timer is recorded the tutorial name must match the name passed into the previous logTutorialStart call. If it does not match then the timer will be logged at 0.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the tutorial
    - Parameter 2 (🔤 String): Was the tutorial completed (one of: "compeleted", "not compeleted")

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogTutorialEnd`.

**Log turotial start**  
Logs the start of a tutorial.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the tutorial

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::LogTutorialStart`.

**Make purchase async**  
Make purchase for specified product.

??? quote "See parameters & details"

    - Parameter 1 (string): ID of product
    - Parameter 2 (🗄️ Any variable): Purchase result structure variable callback

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::MakePurchaseAsync`.

**Post stats async**  
Posts a player's stats.

??? quote "See parameters & details"

    - Parameter 1 (string): Level
    - Parameter 2 (🔢 Number): The value of the stat
    - Parameter 3 (🗄️ Any variable): Payload structure variable

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::PostStatsAsync`.

**Post tournament score async**  
Posts a player's score. This API should only be called within a tournament context at the end of an activity (example: when the player doesn't have "lives" to continue the game).

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Score

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::PostTournamentScoreAsync`.

**Schedule notification async**  
Schedule a notification to be delivered to the player at a later time. Limit of 5 pending scheduled notifications per recipient.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Notification payload structure variable
    - Parameter 2 (🗄️ Any variable): Schedule result structure variable callbacl to save result

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ScheduleNotificationAsync`.

**Send leaderboard entry async**  
Updates the player's score. If the player has an existing score, the old score will only be replaced if the new score is better than it.

??? quote "See parameters & details"

    - Parameter 1 (string): The name of the leaderboard
    - Parameter 2 (🔢 Number): Score for the entry. Must be a 64-bit integer number
    - Parameter 3 (🗄️ Any variable): Leaderboard entry sturcture variable callback

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SendEntryAsync`.

**Save data async**  
Set data to be saved to the designated cloud storage of the current player.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Game progress structure variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SetDataAsync`.

**Set Wortal loading progress**  
Set the loading progress of your game.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Progress (0-100)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SetLoadingProgress`.

**Set session data**  
Set the data associated with the individual gameplay session for the current context.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Structure Variable to set the session data

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SetSessionData`.

**Share async**  
This invokes a dialog to let the user share specified content, as a post on the user's timeline.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Share payload structure variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShareAsync`.

**Share link async**  
This invokes a dialog that contains a custom game link that users can copy to their clipboard, or share.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Payload structure variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShareLinkAsync`.

**Share tournament async**  
Opens the share tournament dialog if the player is currently in a tournament session.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Payload structure variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShareTournamentAsync`.

**Show auth prompt async**  
Shows the authentication prompt to the player. This allows the player to log in or register for an account. If the player successfully logs in or registers, the player API will be updated with the new player information.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShowAuthPromptAsync`.

**Show banner ad**  
Shows a banner ad.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Ad position on the screen (one of: "top", "bottom")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShowBannerAd`.

**Show happy time**  
Can be called on various player achievements (beating a boss, reaching a high score, etc.). It makes the website celebrate (for example by launching some confetti).

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShowHappyTime`.

**Show interstitial ad**  
Shows an interstitial ad. These can be shown at various points in the game such as a level end, restart or a timed interval in games with longer levels.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Placement type (one of: "start", "pause", "next", "browse")
    - Parameter 2 (string): Ad placement

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShowInterstitialAd`.

**Show link account prompt async**  
Shows the link account prompt to the player. This allows the player to link their account to a different platform.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShowLinkAccountPromptAsync`.

**Show rewarded ad**  
Shows a rewarded ad. These are longer, optional ads that the player can earn a reward for watching. The player must be notified of the ad and give permission to show before it can be shown.

??? quote "See parameters & details"

    - Parameter 1 (string): Ad description

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::ShowRewardedAd`.

**Start Game**  
Start Game.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::StartGameAsync`.

**Subscribe bot async**  
Request that the player subscribe the bot associated to the game. The API will reject if the subscription fails - else, the player will subscribe the game bot.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SubscribeBotAsync`.

**Swith context async**  
Request a switch into a specific context.

??? quote "See parameters & details"

    - Parameter 1 (string): ID of context

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SwitchContextAsync`.

**Switch game async**  
Switch to another game. The API will reject if the switch fails - else, the client will load the new game.

??? quote "See parameters & details"

    - Parameter 1 (string): ID of game
    - Parameter 2 (🗄️ Any variable): Optional payload structure variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::SwitchGameAsync`.

**Unlock achivement**  
Unlocks an achievement for the player. This method will only unlock the achievement if it has not already been unlocked.

??? quote "See parameters & details"

    - Parameter 1 (string): Achivement name
    - Parameter 2 (🗄️ Any variable): Is unlocked variable callback

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::UnlockAchivementAsync`.

**Update context async**  
Posts an update to the current context.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Payload structure variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WortalSDK::UpdateContextAsync`.

## Conditions

**Ad has just finished showing**  
Check if ad just finished showing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::HasAdJustFinishedShowing`.

**Ad is blocked**  
Returns whether ads are blocked for the current session.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsAdBlocked`.

**Ad is enabled**  
Returns whether ads are enabled for the current session.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsAdEnabled`.

**Ad is showing**  
Check if ad is showing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsAdShowing`.

**Audio is enabled**  
Returns whether the audio is enabled for the player.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsAudioEnabled`.

**Player is playing for first time**  
Checks whether this is the first time the player has played this game.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsFirstPlay`.

**IAP is enabled**  
Checks whether IAP is enabled in this session.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsIAPEnabled`.

**Wortal SDK is ready**  
Check if Wortal SDK is ready.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::IsWortalInitialized`.

**Player should be rewarded**  
To check if should reward player after showing rewarded ad.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WortalSDK::ShouldRewardPlayer`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `WortalSDK::ContextID()` | Get current context id. ||
| `WortalSDK::ContextType()` | Gets the type of the current context. ||
| `WortalSDK::Device()` | Get user device. ||
| `WortalSDK::Locale()` | Get user locale in BCP47 format. ||
| `WortalSDK::Orientation()` | Get the orientation of the device the player is using. ||
| `WortalSDK::Platform()` | Get the platform the game is running on. This is useful for platform specific code. For example, if you want to show a different social share asset on Facebook than on Link. ||
| `WortalSDK::PlayerID()` | Gets the player's ID from the platform. ||
| `WortalSDK::PlayerName()` | Gets the player's name on the platform. ||
| `WortalSDK::PlayerPhotoURL()` | Gets the player's photo from the platform. ||


---

*This page is an auto-generated reference page about the **Wortal SDK** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).