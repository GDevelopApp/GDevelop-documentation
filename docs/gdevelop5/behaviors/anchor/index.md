---
title: Anchor Behavior
---
# Anchor Behavior

You can anchor an [object](/gdevelop5/objects) to the screen by using anchor [behavior](/gdevelop5/behaviors) to pin its edges (bottom, left, right, or top) to the window edges. Once anchored, if the screen size changes, the distance between the edge of the object and the edge of the window will stay the same. This is useful for static UI/HUD objects.

## Anchoring an object to the screen

To add an anchor to an object:

  * Right-click on the object in the Objects Panel (or create a new object) and select **Edit object**.
  * Click on the **Behaviors** tab.
  * Click **+** to add a behavior to the object.
  * Select **Anchor**.
  * Set your anchor points and click **Apply**.


![](anchorbehavior.png)

The behavior editor shows simplified buttons for common anchoring patterns for both **horizontal** and **vertical** axes:

  * **None**: No anchor applied.
  * **Left / Top**: Object stays pinned to the left or top edge.
  * **Center**: Object stays centered horizontally or vertically.
  * **Right / Bottom**: Object stays pinned to the right or bottom edge.
  * **Fill**: Object stretches to fill the window from one edge to the other.
  * **Fill proportionally**: Object edges scale proportionally with the window size.

Advanced per-edge options (left, right, top, bottom edges individually) are available in the collapsible **Advanced** section of the behavior editor.

## Reference

All actions, conditions and expressions are listed in [the anchor behavior reference page](/gdevelop5/all-features/anchor-behavior/reference/).