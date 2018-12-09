(ns counter.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

;; first need to define the state

(rf/reg-event-db
  :initialise
  (fn [_ _]
     {:count 0}))

(rf/reg-event-db
  :update-counter
  (fn [db [_ _]]
    (update db :count inc)))

(rf/reg-sub
  :count
  (fn [db _]
    (:count db)))

;; components
(defn current-count []
  (fn []
    [:div 
      [:span @(rf/subscribe [:count])]]))

(defn add-count-btn []
  (fn [] 
    [:div
      [:button {:on-click #(rf/dispatch [:update-counter])}
        "increment"]]))

(defn ui []
   (fn [] 
     [:div
       [current-count]
       [add-count-btn]]))

(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui] (.getElementById js/document "root")))
